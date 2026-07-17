import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { seoConfig } from "@/config/seo";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.metadataBaseUrl),
  applicationName: "Academia GPS",
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: [...seoConfig.keywords],
  creator: "Academia GPS",
  publisher: "Academia GPS",
  category: "education",
  alternates: {
    canonical: seoConfig.canonicalPath,
  },
  icons: {
    icon: [
      {
        url: "/brand/academia-gps-icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/brand/academia-gps-icon.svg",
    apple: "/brand/academia-gps-icon.svg",
  },
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    url: seoConfig.canonicalPath,
    siteName: seoConfig.openGraph.siteName,
    locale: seoConfig.openGraph.locale,
    type: seoConfig.openGraph.type,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Academia GPS - La Trilogia TOL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-PY"
      suppressHydrationWarning
      className={`${poppins.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
