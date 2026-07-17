"use client";

import Image from "next/image";
import { useState } from "react";

type VideoPlayerProps = {
  src: string;
  poster: string;
  label: string;
  orientation?: "horizontal" | "vertical";
  sizes?: string;
  className?: string;
};

export function VideoPlayer({
  src,
  poster,
  label,
  orientation = "horizontal",
  sizes,
  className = "",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const isVertical = orientation === "vertical";

  return (
    <div className={["video-group relative", className].join(" ")}>
      <div
        className={[
          "video-card-premium rounded-3xl bg-black",
          isVertical ? "aspect-[9/16]" : "aspect-video",
        ].join(" ")}
      >
        {isPlaying ? (
          <video
            className="h-full w-full object-cover"
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Reproducir: ${label}`}
            className="relative block h-full w-full cursor-pointer"
          >
            <Image
              src={poster}
              alt={label}
              fill
              sizes={sizes ?? (isVertical ? "(max-width: 640px) 74vw, 420px" : "(max-width: 900px) 92vw, 600px")}
              className={["object-cover", isVertical ? "object-[50%_14%]" : "object-[50%_28%]"].join(" ")}
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="video-play-button h-14 w-14 sm:h-16 sm:w-16">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-5 w-5 sm:h-6 sm:w-6"
                >
                  <path d="M8 5v14l11-7Z" />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm sm:bottom-4 sm:left-4">
              {label}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
