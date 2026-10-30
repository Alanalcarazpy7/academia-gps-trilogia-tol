"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import {
  getAnalyticsSession,
  googleAnalyticsConfig,
  type GoogleAnalyticsMode,
} from "@/config/analytics";
import {
  getAnalyticsContext,
  getLinkAnalyticsEvent,
  getPriceCategoryEvent,
  type AnalyticsEvent,
} from "@/lib/analytics-events";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    gpsAnalyticsSession?: "production" | "debug";
    [disableKey: `ga-disable-${string}`]: boolean | undefined;
  }
}

function subscribeToLocation(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

function getServerSnapshot() {
  return false;
}

export function GoogleAnalytics({ mode }: { mode: GoogleAnalyticsMode }) {
  const enabled = useSyncExternalStore(
    subscribeToLocation,
    () => getAnalyticsSession(mode, window.location.href).enabled,
    getServerSnapshot,
  );

  useEffect(() => {
    const disableKey = `ga-disable-${googleAnalyticsConfig.measurementId}` as const;
    window[disableKey] = !enabled;
    if (!enabled) return;
    const { debug } = getAnalyticsSession(mode, window.location.href);
    const session = debug ? "debug" : "production";
    window.dataLayer ??= [];
    window.gtag ??= function gtag() {
      // Google expects native Arguments commands, not ordinary arrays.
      // eslint-disable-next-line prefer-rest-params -- Preserve the gtag.js command protocol.
      window.dataLayer?.push(arguments);
    };

    if (window.gpsAnalyticsSession !== session) {
      window.gtag("js", new Date());
      window.gtag("config", googleAnalyticsConfig.measurementId, {
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        ...(debug ? {
          debug_mode: true,
          // No enviar los tokens de acceso de un enlace compartible de Vercel.
          page_location: `${window.location.origin}${window.location.pathname}`,
          page_referrer: "",
        } : {}),
      });
      window.gpsAnalyticsSession = session;
    }

    function send(event: AnalyticsEvent | null) {
      if (!event) return;
      window.gtag?.("event", event.name, {
        ...event.parameters,
        send_to: googleAnalyticsConfig.measurementId,
        ...(debug ? { debug_mode: true } : {}),
      });
    }

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || (event.button !== 0 && event.button !== 1)) {
        return;
      }
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");
      if (link) {
        send(
          getLinkAnalyticsEvent(
            link.href,
            window.location.href,
            getAnalyticsContext(link),
          ),
        );
        return;
      }
      const tab = target?.closest('[role="tab"]');
      if (tab && event.button === 0) send(getPriceCategoryEvent(tab.id));
    }

    const playedVideos = new WeakSet<HTMLVideoElement>();
    function handlePlay(event: Event) {
      const video = event.target;
      if (
        !(video instanceof HTMLVideoElement) ||
        !video.closest(".gps-presentation-video-screen") ||
        playedVideos.has(video)
      ) return;
      playedVideos.add(video);
      send({ name: "presentation_video_start", parameters: getAnalyticsContext(video) });
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("auxclick", handleClick);
    document.addEventListener("play", handlePlay, true);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("auxclick", handleClick);
      document.removeEventListener("play", handlePlay, true);
      window[disableKey] = true;
    };
  }, [enabled, mode]);

  if (!enabled) return null;

  return (
    <Script
      id="academia-google-analytics"
      src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsConfig.measurementId}`}
      strategy="afterInteractive"
    />
  );
}
