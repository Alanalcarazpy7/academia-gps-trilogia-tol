"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PresentationVideoProps = {
  src: string;
  poster: string;
  label: string;
};

export function PresentationVideo({ src, poster, label }: PresentationVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying && !hasError) videoRef.current?.focus();
  }, [isPlaying, hasError]);

  return (
    <div className="gps-presentation-video-screen">
      {hasError ? (
        <div className="gps-presentation-video-error" role="alert">
          <p>No se pudo reproducir el video original.</p>
          <button type="button" onClick={() => setHasError(false)}>
            Volver a intentar
          </button>
        </div>
      ) : isPlaying ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          controlsList="nodownload"
          autoPlay
          playsInline
          preload="metadata"
          tabIndex={0}
          aria-label={label}
          onError={() => setHasError(true)}
        >
          Tu navegador no permite reproducir este video.
        </video>
      ) : (
        <button
          type="button"
          className="gps-presentation-video-cover"
          aria-label={`Reproducir: ${label}`}
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={poster}
            alt="Dra. Nidia Carolina presentando la Trilogía TOL"
            width={1920}
            height={1080}
            sizes="(max-width: 1023px) 90vw, 800px"
            loading="lazy"
            unoptimized
          />
          <span className="gps-presentation-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
