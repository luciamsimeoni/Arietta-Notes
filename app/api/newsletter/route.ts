import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      listIds: [3],
      updateEnabled: true,
    }),
  });

  if (!res.ok && res.status !== 204) {
    return NextResponse.json({ error: "Erreur Brevo" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
