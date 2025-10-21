"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, GraduationCap, Presentation, List, FileText, MessageSquare, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { signOut } from "@/app/auth/logout/actions";

// Helper function to get user initials (duplicated to avoid server/client boundary issues)
function getUserInitials(name: string | null, email: string): string {
  if (name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  return email.substring(0, 2).toUpperCase();
}

interface MobileNavProps {
  user: {
    email?: string;
    full_name?: string | null;
  } | null;
}

export function MobileNav({ user }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  // Close sheet when navigating
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        {/* User Info Section (if logged in) */}
        {user && (
          <div className="flex items-center gap-3 py-4 border-b">
            <Avatar className="h-12 w-12">
              <AvatarImage src={undefined} alt={user.email || 'User'} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {getUserInitials(user.full_name || null, user.email || '')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {user.full_name || 'Participant'}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user.email}
              </p>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1 py-4">
          {user && (
            <Link
              href="/protected"
              onClick={handleLinkClick}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <GraduationCap className="h-5 w-5" />
              <span>Training Hub</span>
            </Link>
          )}

          <Link
            href="/presentation"
            onClick={handleLinkClick}
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Presentation className="h-5 w-5" />
            <span>Presentation</span>
          </Link>

          <Link
            href="/scenarios"
            onClick={handleLinkClick}
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <List className="h-5 w-5" />
            <span>Scenarios</span>
          </Link>

          <Link
            href="/policy"
            onClick={handleLinkClick}
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <FileText className="h-5 w-5" />
            <span>Policy</span>
          </Link>

          <Link
            href="/feedback"
            onClick={handleLinkClick}
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            <span>Feedback</span>
          </Link>
        </nav>

        <Separator className="my-4" />

        {/* Auth Section */}
        {user ? (
          <form action={signOut} className="w-full">
            <Button
              type="submit"
              variant="ghost"
              className="w-full justify-start gap-3 text-sm font-medium"
            >
              <LogOut className="h-5 w-5" />
              <span>Log out</span>
            </Button>
          </form>
        ) : (
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <Link href="/auth/sign-up" onClick={handleLinkClick}>
                Sign up
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/auth/login" onClick={handleLinkClick}>
                Sign in
              </Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

