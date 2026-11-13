import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arietta Confetteria — Notes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f9f5f1",
          display: "flex",
          alignItems: "center",
          paddingLeft: 80,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 72,
            color: "#1c1a17",
            letterSpacing: "-0.5px",
          }}
        >
          Arietta Confetteria
        </span>
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 44,
            fontStyle: "italic",
            color: "#7a5c2e",
            marginLeft: 28,
          }}
        >
          Notes
        </span>
      </div>
    ),
    { ...size }
  );
}
