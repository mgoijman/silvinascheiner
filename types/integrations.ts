import type { LeadPayload } from "./lead";

export interface CRMAdapter {
  createOrUpdateContact(lead: LeadPayload): Promise<void>;
}

export interface EmailAdapter {
  sendConfirmation(to: string, lead: LeadPayload): Promise<void>;
  sendAdminNotification(lead: LeadPayload): Promise<void>;
}
