"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface FacilitatorNotesProps {
  notes?: string[];
  label?: string;
  className?: string;
}

export function FacilitatorNotes({ 
  notes, 
  label = "Facilitator Notes",
  className 
}: FacilitatorNotesProps) {
  if (!notes || notes.length === 0) return null;

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div
          className={cn(
            "fixed bottom-6 right-6 z-10",
            "flex items-center gap-2 px-3 py-2 rounded-lg",
            "bg-primary/10 backdrop-blur-sm border border-primary/20",
            "opacity-40 hover:opacity-100 transition-all duration-200",
            "cursor-help group",
            className
          )}
        >
          <BookOpen className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium text-primary hidden sm:inline">
            Notes
          </span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent 
        side="top" 
        align="end" 
        className="w-96 max-w-[calc(100vw-2rem)]"
        sideOffset={8}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b">
            <BookOpen className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-sm">{label}</h4>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            {notes.map((note, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="flex-1">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

