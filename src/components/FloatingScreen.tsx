import { type CSSProperties, type Ref } from "react";

/**
 * Frame-less floating iPhone screen — used for both still screenshots
 * and live screen recordings (the recordings already include the iOS
 * dynamic island, so we don't need to overlay a device chrome).
 *
 * Aspect ratio is the iPhone 15 Pro display: 1179 × 2556.
 * Border-radius is split horizontal / vertical so the corners read as
 * round on the elongated rectangle (4.66% × 2.15%).
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
  onEnded?: React.ReactEventHandler<HTMLVideoElement>;
  videoRef?: Ref<HTMLVideoElement>;
  videoActive?: boolean;
}

export default function FloatingScreen({
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
}: Props) {
  return (
    <div
      className={`floating-screen relative overflow-hidden bg-black ${className}`}
      style={{
        // iPhone 15 Pro display continuous corner radius ≈ 55pt = 165 native px
        // on a 1179×2556 panel → 14% of width, 6.45% of height. The
        // split syntax keeps the corners reading as round on the elongated
        // rectangle.
        aspectRatio: "1179 / 2556",
        borderRadius: "14% / 6.45%",
        ...style,
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
  );
}
