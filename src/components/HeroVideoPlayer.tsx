import { useEffect, useRef, useState } from "react";
import DeviceFrame from "./DeviceFrame";
import { asset } from "../lib/asset";

interface Clip {
  src: string;
  poster: string;
}

const CLIPS: Clip[] = [
  { src: asset("/media/map-discovery-v2.mp4"), poster: asset("/screens/us/map-us.png") },
  { src: asset("/media/rival-zone-v2.mp4"), poster: asset("/screens/us/map-user-details-us.png") },
  { src: asset("/media/leaderboard-v2.mp4"), poster: asset("/screens/us/old-rides-us.png") },
];

/**
 * Three native screen recordings looped inside an iPhone 15 Pro frame
 * (no-notch — the recordings already include the dynamic island).
 * Crossfade between clips animates the WHOLE device (scale + translate
 * + blur) so the swap feels like a phone being replaced, not just the
 * screen flipping.
 */
export default function HeroVideoPlayer() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        const p = v.play();
        if (p) p.catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  function next() {
    setActive((i) => (i + 1) % CLIPS.length);
  }

  return (
    <div
      className="relative"
      style={{ display: "grid", gridTemplateAreas: '"stack"' }}
    >
      {CLIPS.map((c, i) => {
        const isActive = i === active;
        return (
          <div
            key={c.src}
            className="hero-clip"
            style={{
              gridArea: "stack",
              opacity: isActive ? 1 : 0,
              transform: isActive
                ? "scale(1) translateY(0)"
                : "scale(0.94) translateY(12px)",
              filter: isActive ? "blur(0px)" : "blur(6px)",
              transition:
                "opacity 700ms cubic-bezier(0.32, 0.72, 0, 1), transform 900ms cubic-bezier(0.32, 0.72, 0, 1), filter 700ms ease-out",
              willChange: "opacity, transform, filter",
              pointerEvents: isActive ? "auto" : "none",
            }}
            aria-hidden={!isActive}
          >
            <DeviceFrame
              variant="no-notch"
              posterSrc={c.poster}
              videoSrc={c.src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              videoActive={isActive}
              onEnded={isActive ? next : undefined}
              videoRef={(el) => {
                refs.current[i] = el;
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
