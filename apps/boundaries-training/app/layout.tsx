import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CMDHD Professional Boundaries Training",
  description: "Embracing Professional Boundaries: The stories we tell ourselves - Training module for Central Michigan District Health Department",
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CMDHD Boundaries",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "CMDHD Professional Boundaries Training",
    title: "CMDHD Professional Boundaries Training",
    description: "Embracing Professional Boundaries: Interactive training module for Central Michigan District Health Department staff",
  },
  twitter: {
    card: "summary",
    title: "CMDHD Professional Boundaries Training",
    description: "Embracing Professional Boundaries: Interactive training module for Central Michigan District Health Department staff",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ScrollProgress />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
