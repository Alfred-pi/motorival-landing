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
 * Frames are perfectly stacked: only the screen content fades. The
 * device itself stays still — no scale, translate, or blur — so the
 * iPhone reads as a single object the user is staring at.
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
            style={{
              gridArea: "stack",
              opacity: isActive ? 1 : 0,
              transition: "opacity 600ms ease-out",
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
