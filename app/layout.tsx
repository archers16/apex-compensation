import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Apex Compensation | Sales Compensation Consultant for High-Growth Companies",
  description:
    "Apex Compensation is a premium sales compensation consulting firm. We design incentive plans, quota structures, and comp architecture for high-growth B2B companies. Based in Austin, TX.",
  keywords: [
    "sales compensation consultant",
    "sales comp consulting",
    "incentive compensation consultant",
    "sales compensation design",
    "sales comp plan design",
    "quota design consultant",
    "RevOps consulting",
    "sales incentive plan consultant",
    "B2B SaaS compensation consultant",
    "Austin sales compensation consultant",
  ],
  authors: [{ name: "Saxton Archer", url: "https://apexcompensation.com" }],
  creator: "Saxton Archer",
  metadataBase: new URL("https://apexcompensation.com"),
  alternates: {
    canonical: "https://apexcompensation.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Apex Compensation | Sales Compensation Consultant",
    description:
      "Premium sales compensation consulting for high-growth companies. Incentive plan design, quota strategy, and comp architecture built around the behaviors your business needs.",
    type: "website",
    url: "https://apexcompensation.com",
    siteName: "Apex Compensation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apex Compensation - Sales Compensation Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Compensation | Sales Compensation Consultant",
    description:
      "Premium sales compensation consulting for high-growth companies. Incentive plan design, quota strategy, and comp architecture.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
