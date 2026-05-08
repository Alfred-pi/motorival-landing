import { type CSSProperties } from "react";

/**
 * iPhone 15 Pro device frame wrapper.
 *
 * Geometry measured from the alpha mask of the frame PNG (1419×2796).
 * The transparent screen window:
 *   - top  inset: 130 / 2796 = 4.65 %
 *   - bot  inset: 136 / 2796 = 4.86 %
 *   - left inset: 120 / 1419 = 8.46 %
 *   - right inset: 119 / 1419 = 8.39 %
 *   - corner radius (rendered round on a 1180×2530 screen):
 *       55 / 1180 ≈ 4.66 %  /  55 / 2530 ≈ 2.17 %
 *
 * Screen aspect (1180 / 2530 = 0.4664) is slightly wider than the iPhone
 * display recording aspect (1179 / 2556 = 0.4612), so we set the screen
 * window to its native ratio inside the frame and use `object-cover` for
 * the content. The frame's drawn notch sits on top of the screen content
 * and naturally covers the dynamic island when the inner content is a
 * native screen recording.
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
const INSET_TOP = "4.65%";
const INSET_BOTTOM_DEFAULT = "4.86%";
const INSET_BOTTOM_NONOTCH = "5.22%";
const INSET_LEFT = "8.46%";
const INSET_RIGHT = "8.39%";
const SCREEN_RADIUS = "4.66% / 2.17%";

const FRAME_SRC: Record<NonNullable<Props["variant"]>, string> = {
  default: "/frame/iphone-15-pro.png",
  "no-notch": "/frame/iphone-15-pro-no-notch.png",
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
  const insetBottom = variant === "no-notch" ? INSET_BOTTOM_NONOTCH : INSET_BOTTOM_DEFAULT;
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
          top: INSET_TOP,
          bottom: insetBottom,
          left: INSET_LEFT,
          right: INSET_RIGHT,
          borderRadius: SCREEN_RADIUS,
          background: "#000",
        }}
      >
        {videoSrc ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-contain"
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
