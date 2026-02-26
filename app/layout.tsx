import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Compensation | Sales comp, engineered.",
  description:
    "Premium sales compensation consulting for Series B-D B2B SaaS companies. We treat comp as behavioral engineering, not a back-office function.",
  openGraph: {
    title: "Apex Compensation | Sales comp, engineered.",
    description:
      "Stop managing comp. Start engineering behavior. Premium consulting for B2B SaaS revenue teams.",
    type: "website",
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
      <body>{children}</body>
    </html>
  );
}
