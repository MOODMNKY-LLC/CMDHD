"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, X, Home, BookOpen, FileText, MessageSquare, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  description: string;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
    description: "Return to the main page"
  },
  {
    title: "Presentation",
    href: "/presentation",
    icon: BookOpen,
    description: "Interactive training slides"
  },
  {
    title: "Scenarios",
    href: "/scenarios",
    icon: Activity,
    description: "Practice boundary situations"
  },
  {
    title: "Policy",
    href: "/policy",
    icon: FileText,
    description: "Professional boundaries policy"
  },
  {
    title: "Feedback",
    href: "/feedback",
    icon: MessageSquare,
    description: "Submit training feedback"
  }
];

interface MobileNavProps {
  user?: {
    email?: string;
  };
}

export function MobileNav({ user }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>CMDHD Boundaries</SheetTitle>
          <SheetDescription>
            Professional Boundaries Training
          </SheetDescription>
        </SheetHeader>
        
        <Separator className="my-4" />
        
        <div className="flex flex-col space-y-2 mt-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-start gap-3 rounded-lg px-3 py-3 text-sm transition-colors hover:bg-accent",
                  isActive && "bg-accent text-accent-foreground"
                )}
              >
                <Icon className="h-5 w-5 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.description}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        
        <Separator className="my-4" />
        
        <div className="flex flex-col space-y-2">
          {user ? (
            <>
              <div className="px-3 py-2 text-sm">
                <p className="text-muted-foreground text-xs mb-1">Signed in as</p>
                <p className="font-medium truncate">{user.email}</p>
              </div>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/auth/login" onClick={() => setOpen(false)}>
                  Sign Out
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/auth/login" onClick={() => setOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <Link href="/auth/sign-up" onClick={() => setOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

