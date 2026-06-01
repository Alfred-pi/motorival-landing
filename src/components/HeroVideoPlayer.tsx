import DeviceFrame from "./DeviceFrame";
import { asset } from "../lib/asset";

interface Clip {
  src: string;
  poster: string;
}

const HERO_CLIP: Clip = {
  src: asset("/media/map-discovery-v2.mp4"),
  poster: asset("/screens/optimized/us/map-us.webp"),
};

/**
 * Native screen recording looped inside an iPhone 15 Pro frame
 * (no-notch — the recordings already include the dynamic island).
 * The component is intentionally static: the browser can autoplay the
 * muted HTML video without React hydration.
 */
export default function HeroVideoPlayer() {
  return (
    <div
      className="relative"
      style={{ display: "grid", gridTemplateAreas: '"stack"' }}
    >
      <div style={{ gridArea: "stack" }}>
        <DeviceFrame
          variant="no-notch"
          posterSrc={HERO_CLIP.poster}
          videoSrc={HERO_CLIP.src}
          alt=""
          loading="eager"
          fetchPriority="high"
          videoActive
        />
      </div>
    </div>
  );
}
