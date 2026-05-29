// CRM adapter abstraction — fail silently, never block user flow.
// Configure by setting CRM_PROVIDER env var: hubspot | mailchimp | convertkit
// Leave unset for no-op (development / before CRM is configured).

import type { LeadPayload } from "@/types/lead";
import type { CRMAdapter } from "@/types/integrations";

// ── Interest → tag mapping ───────────────────────────────────────────────────
const INTEREST_TAGS: Record<string, string[]> = {
  first_chapter:     ["reader", "first_chapter"],
  book_digital:      ["reader", "book_buyer"],
  book_physical:     ["reader", "book_buyer", "physical_book"],
  audiobook:         ["reader", "audiobook"],
  community:         ["community"],
  creativity_group:  ["creativity_group"],
  reading_group:     ["reading_group"],
  coaching:          ["coaching"],
  workshop:          ["workshop"],
  orientation:       ["general_inquiry"],
};

function tagsForLead(lead: LeadPayload): string[] {
  return INTEREST_TAGS[lead.interest ?? ""] ?? ["general_inquiry"];
}

// ── HubSpot adapter ──────────────────────────────────────────────────────────
class HubSpotAdapter implements CRMAdapter {
  private token: string;
  constructor(token: string) { this.token = token; }

  async createOrUpdateContact(lead: LeadPayload): Promise<void> {
    const properties: Record<string, string> = {
      email:     lead.email,
      firstname: lead.name.split(" ")[0],
      lastname:  lead.name.split(" ").slice(1).join(" "),
      phone:     lead.whatsapp ?? "",
      city:      lead.city ?? "",
      country:   lead.country ?? "",
    };
    await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type":  "application/json",
        Authorization:   `Bearer ${this.token}`,
      },
      body: JSON.stringify({ properties }),
    });
    // TODO: apply tags via HubSpot contact lists or properties
  }
}

// ── Mailchimp adapter ────────────────────────────────────────────────────────
class MailchimpAdapter implements CRMAdapter {
  private apiKey: string;
  private server: string;
  private listId: string;
  constructor(apiKey: string, server: string, listId: string) {
    this.apiKey = apiKey; this.server = server; this.listId = listId;
  }

  async createOrUpdateContact(lead: LeadPayload): Promise<void> {
    const tags = tagsForLead(lead);
    await fetch(
      `https://${this.server}.api.mailchimp.com/3.0/lists/${this.listId}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:  `apikey ${this.apiKey}`,
        },
        body: JSON.stringify({
          email_address: lead.email,
          status:        "subscribed",
          merge_fields:  { FNAME: lead.name },
          tags,
        }),
      }
    );
  }
}

// ── ConvertKit adapter ───────────────────────────────────────────────────────
class ConvertKitAdapter implements CRMAdapter {
  private apiKey: string;
  private formId: string;
  constructor(apiKey: string, formId: string) {
    this.apiKey = apiKey; this.formId = formId;
  }

  async createOrUpdateContact(lead: LeadPayload): Promise<void> {
    await fetch(`https://api.convertkit.com/v3/forms/${this.formId}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key:    this.apiKey,
        email:      lead.email,
        first_name: lead.name,
        tags:       tagsForLead(lead),
      }),
    });
  }
}

// ── No-op adapter ────────────────────────────────────────────────────────────
class NoopAdapter implements CRMAdapter {
  async createOrUpdateContact(lead: LeadPayload): Promise<void> {
    console.debug("[CRM noop] lead received:", lead.email, lead.interest ?? "");
  }
}

// ── Factory ──────────────────────────────────────────────────────────────────
export function getCRMAdapter(): CRMAdapter {
  const provider = process.env.CRM_PROVIDER ?? "";

  if (provider === "hubspot") {
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
    if (token) return new HubSpotAdapter(token);
  }

  if (provider === "mailchimp") {
    const key    = process.env.MAILCHIMP_API_KEY;
    const server = process.env.MAILCHIMP_SERVER_PREFIX;
    const list   = process.env.MAILCHIMP_AUDIENCE_ID;
    if (key && server && list) return new MailchimpAdapter(key, server, list);
  }

  if (provider === "convertkit") {
    const key    = process.env.CONVERTKIT_API_KEY;
    const formId = process.env.CONVERTKIT_FORM_ID;
    if (key && formId) return new ConvertKitAdapter(key, formId);
  }

  return new NoopAdapter();
}
