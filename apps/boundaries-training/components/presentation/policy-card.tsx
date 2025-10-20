"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield } from "lucide-react";
import type { PolicyReference } from "@/lib/data/presentation-slides";

interface PolicyCardProps {
  policy: PolicyReference;
  variant?: "default" | "compact";
}

export function PolicyCard({ policy, variant = "default" }: PolicyCardProps) {
  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r text-sm">
        <Shield className="h-4 w-4 text-primary flex-shrink-0" />
        <span className="font-semibold">CMDHD Policy #{policy.section}</span>
        {policy.externalRef && (
          <span className="text-muted-foreground">• {policy.externalRef}</span>
        )}
      </div>
    );
  }

  return (
    <Alert className="border-l-4 border-l-primary bg-primary/5 print:border print:border-primary/20">
      <Shield className="h-4 w-4" />
      <AlertTitle className="text-base">
        CMDHD Policy #{policy.section}
        {policy.externalRef && (
          <span className="text-sm text-muted-foreground ml-2">
            {policy.externalRef}
          </span>
        )}
      </AlertTitle>
      <AlertDescription className="text-sm mt-2">
        <p className="font-semibold mb-2">{policy.title}</p>
        <p className="text-muted-foreground leading-relaxed">{policy.text}</p>
      </AlertDescription>
    </Alert>
  );
}

