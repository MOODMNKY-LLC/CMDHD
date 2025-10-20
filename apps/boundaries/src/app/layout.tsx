import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMDHD Professional Boundaries",
  description: "Training and presentation site for CMDHD Professional Boundaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ScrollProgress />
        <header className="border-b border-border/50">
          <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold">CMDHD</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/docs/slide-deck.md" target="_blank">Slides</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/docs/cmdhd-professional-boundaries-policy.md" target="_blank">Policy</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/docs/boundaries-training-scaffold.md" target="_blank">Training</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        {children}
        <footer className="border-t border-border/50 mt-16">
          <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground flex items-center justify-between">
            <span>© {new Date().getFullYear()} CMDHD</span>
            <div className="flex gap-4">
              <Link href="/docs/run-of-show.md" target="_blank">Run of Show</Link>
              <Link href="/docs/presentation-notes.md" target="_blank">Notes</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
