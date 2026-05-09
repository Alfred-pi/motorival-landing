import { type CSSProperties } from "react";
import { asset } from "../lib/asset";

/**
 * iPhone 15 Pro device frame wrapper.
 *
 * Geometry measured from the actual alpha-zero rect of each PNG (2026-05-09):
 *
 *   default (with drawn notch — 1419×2796):
 *     screen window 1179×2410 at top=265 bot=120 left=120 right=120
 *     → top 9.478% / bot 4.292% / left 8.457% / right 8.457%
 *     → ratio 0.4890 (window excludes the notch zone — drawn opaque)
 *
 *   no-notch (1419×2796):
 *     screen window 1179×2556 at top=120 bot=120 left=120 right=120
 *     → top/bot 4.292% / left/right 8.457%
 *     → ratio 0.4613 (matches a native iPhone recording aspect 1179/2556)
 *
 * Use `object-cover` on the inner media so it fills the transparent
 * screen window. For native screen recordings (1179×2556), use the
 * `no-notch` variant — the image's own status bar + dynamic island
 * align naturally with the frame.
 */

interface Props {
  posterSrc: string;
  videoSrc?: string;
  videoSrcWebm?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  loading?: "eager" | "lazy";
  autoplay?: boolean;
  /** Forwarded to the inner <video> element when present. */
  onEnded?: React.ReactEventHandler<HTMLVideoElement>;
  videoRef?: React.Ref<HTMLVideoElement>;
  /** When true the inner video plays muted with autoplay/loop/playsInline. */
  videoActive?: boolean;
  /**
   * Frame variant. `default` is the iPhone 15 Pro with the dynamic-island
   * notch drawn in. `no-notch` is the same chassis without the island —
   * use this when the inner content is a screen recording that already
   * includes the dynamic island, so we don't draw a second one over it.
   */
  variant?: "default" | "no-notch";
}

// Geometry shared by both frames (1419×2796 PNGs, transparent screen window).
// Default frame top inset is larger because the drawn notch is opaque and
// sits above the transparent screen rect.
const INSET_TOP_DEFAULT = "9.478%";
const INSET_TOP_NONOTCH = "4.292%";
const INSET_BOTTOM = "4.292%";
const INSET_LEFT = "8.457%";
const INSET_RIGHT = "8.457%";
const SCREEN_RADIUS = "4.66% / 2.17%";

const FRAME_SRC: Record<NonNullable<Props["variant"]>, string> = {
  default: asset("/frame/iphone-15-pro.png"),
  "no-notch": asset("/frame/iphone-15-pro-no-notch.png"),
};

export default function DeviceFrame({
  posterSrc,
  videoSrc,
  videoSrcWebm,
  alt = "",
  className = "",
  style,
  loading = "lazy",
  autoplay = true,
  onEnded,
  videoRef,
  videoActive = true,
  variant = "default",
}: Props) {
  const insetTop = variant === "no-notch" ? INSET_TOP_NONOTCH : INSET_TOP_DEFAULT;
  return (
    <div
      className={`device-frame relative ${className}`}
      style={{
        aspectRatio: "1419 / 2796",
        ...style,
      }}
    >
      {/* Screen window — content sits behind the frame PNG. */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: insetTop,
          bottom: INSET_BOTTOM,
          left: INSET_LEFT,
          right: INSET_RIGHT,
          borderRadius: SCREEN_RADIUS,
          background: "#000",
        }}
      >
        {videoSrc ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: "scale(1.025)" }}
            autoPlay={autoplay && videoActive}
            loop={!onEnded}
            muted
            playsInline
            preload="metadata"
            poster={posterSrc}
            aria-label={alt}
            onEnded={onEnded}
          >
            {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={posterSrc}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: "scale(1.025)" }}
            loading={loading}
            decoding="async"
          />
        )}
      </div>

      {/* Frame on top */}
      <img
        src={FRAME_SRC[variant]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        loading={loading}
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
