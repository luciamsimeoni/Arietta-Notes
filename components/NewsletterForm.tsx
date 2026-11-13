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
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <p style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#5c4a2a", fontFamily: "Inter, sans-serif", marginBottom: "1rem" }}>
        Inscription à la newsletter
      </p>
      {status === "done" ? (
        <span style={{
          display: "inline-block",
          border: "1px solid rgba(17,17,17,0.28)",
          borderRadius: 9999,
          padding: "0.5rem 1.4rem",
          fontSize: "0.72rem",
          letterSpacing: "0.1em",
          color: "#5c4a2a",
          fontFamily: "Inter, sans-serif",
        }}>
          C&apos;est noté.
        </span>
      ) : (
        <form onSubmit={submit} style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(17,17,17,0.28)", borderRadius: 9999, padding: "0.5rem 1rem 0.5rem 1.4rem", gap: "0.6rem" }}>
          <input
            type="email"
            required
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              background: "none",
              border: "none",
              outline: "none",
              fontSize: "0.75rem",
              color: "#1c1a17",
              fontFamily: "Inter, sans-serif",
              width: 170,
              letterSpacing: "0.02em",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              background: "none",
              border: "1px solid rgba(17,17,17,0.18)",
              borderRadius: 9999,
              cursor: "pointer",
              fontSize: "0.62rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#5c4a2a",
              fontFamily: "Inter, sans-serif",
              padding: "0.25rem 0.8rem",
              whiteSpace: "nowrap",
            }}
          >
            {status === "loading" ? "…" : "S'inscrire"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p style={{ fontSize: "0.65rem", color: "#c0392b", fontFamily: "Inter, sans-serif", marginTop: "0.5rem" }}>
          Une erreur est survenue, réessaie.
        </p>
      )}
    </div>
  );
}
