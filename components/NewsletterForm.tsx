"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setStatus(res.ok ? "done" : "error");
  }

  return (
    <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid #d8cfc4" }}>
      <p style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a7e72", marginBottom: "0.9rem", fontFamily: "Inter, sans-serif" }}>
        Recevoir les prochaines notes
      </p>

      {status === "done" ? (
        <p style={{ fontSize: "0.75rem", color: "#7a5c2e", fontFamily: "Inter, sans-serif" }}>
          C&apos;est noté.
        </p>
      ) : (
        <form onSubmit={submit} style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          <input
            type="email"
            required
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              background: "none",
              border: "none",
              borderBottom: "1px solid #c8bfb4",
              outline: "none",
              fontSize: "0.8rem",
              color: "#1c1a17",
              fontFamily: "Inter, sans-serif",
              padding: "0.2rem 0",
              width: 200,
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#8a7e72",
              fontFamily: "Inter, sans-serif",
              padding: 0,
            }}
          >
            {status === "loading" ? "…" : "S'inscrire"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p style={{ fontSize: "0.7rem", color: "#c0392b", fontFamily: "Inter, sans-serif", marginTop: "0.4rem" }}>
          Une erreur est survenue, réessaie.
        </p>
      )}
    </div>
  );
}
