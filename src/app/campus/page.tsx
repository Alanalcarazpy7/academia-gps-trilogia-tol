import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Virtual | Academia GPS",
  robots: { index: false, follow: false },
};

const campusUrl = "https://aula.vidroop.com/login/44c6fc57-9a61-4279-ac54-0d7c86a7c9ba";

export default function CampusPage() {
  return (
    <iframe
      src={campusUrl}
      title="Campus Virtual Academia GPS"
      className="h-dvh w-full"
      style={{ border: 0, display: "block" }}
      allow="fullscreen"
    />
  );
}
