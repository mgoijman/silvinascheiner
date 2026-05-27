import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const webhook = process.env.SHEETS_WEBHOOK;
    if (!webhook) {
      return NextResponse.json({ error: "SHEETS_WEBHOOK not configured" }, { status: 500 });
    }

    // Call Apps Script server-side — no CORS issues
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const text = await res.text();
    return NextResponse.json({ ok: true, upstream: text });
  } catch (err) {
    console.error("[capture] error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
