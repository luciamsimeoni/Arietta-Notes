"use client";

import { useRef, useState, useEffect } from "react";

export default function AudioPlayer({ src }: { src?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [open, setOpen] = useState(false);

  const available = !!src;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress(audio.currentTime / (audio.duration || 1));
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => { setPlaying(false); setProgress(0); };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, [src]);

  function toggle() {
    if (!available) return;
    const audio = audioRef.current!;
    if (!open) setOpen(true);
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current!;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
    setProgress(ratio);
  }

  function fmt(s: number) {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  const pillStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35rem",
    border: "1px solid #7a5c2e",
    borderRadius: 9999,
    padding: "0.25rem 0.65rem",
    backgroundColor: "rgba(122,92,46,0.08)",
    cursor: available ? "pointer" : "default",
  };

  return (
    <div style={{ position: "relative" }}>
      {src && <audio ref={audioRef} src={src} preload="metadata" />}

      {/* Pill bouton */}
      <div style={pillStyle} onClick={toggle}>
        <button
          onClick={(e) => { e.stopPropagation(); toggle(); }}
          style={{ background: "none", border: "none", padding: 0, cursor: available ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1, color: "#7a5c2e" }}
          aria-label={playing ? "Pause" : "Écouter"}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          )}
        </button>
        <span style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a5c2e", fontFamily: "Inter, sans-serif", fontWeight: 500, whiteSpace: "nowrap", lineHeight: 1 }}>
          Écouter
        </span>
      </div>

      {/* Barre de progression — absolue, ne décale rien */}
      {open && (
        <div style={{ position: "absolute", top: "calc(100% + 5px)", left: 0, display: "flex", alignItems: "center", gap: "0.5rem", width: 220 }}>
          <div
            onClick={seek}
            style={{ flex: 1, height: 2, backgroundColor: "rgba(17,17,17,0.12)", borderRadius: 9999, cursor: "pointer", position: "relative" }}
          >
            <div style={{ width: `${progress * 100}%`, height: "100%", backgroundColor: "#9e7e52", borderRadius: 9999, transition: "width 0.1s linear" }} />
          </div>
          <span style={{ fontSize: "0.58rem", color: "#8a7e72", fontFamily: "Inter, sans-serif", whiteSpace: "nowrap", letterSpacing: "0.04em" }}>
            {fmt(audioRef.current?.currentTime ?? 0)}/{fmt(duration)}
          </span>
        </div>
      )}
    </div>
  );
}
