"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, ArrowRight, ExternalLink } from "lucide-react";

export default function PresenterPage() {
  const searchParams = useSearchParams();
  const module = searchParams.get("module");

  // If no module selected, show welcome screen
  if (!module) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Professional Boundaries Training
          </h1>
          <p className="text-lg text-muted-foreground">
            Central Michigan District Health Department
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Welcome to the Training Module</CardTitle>
                <CardDescription>
                  Use the sidebar to navigate through training sections
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Getting Started</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Select a training section from the team switcher at the top of the sidebar</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Navigate through modules using the sidebar menu</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Collapse the sidebar for a focused presentation view (Cmd/Ctrl + B)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Training Sections</h3>
              <div className="grid gap-3">
                <div className="rounded-lg border p-3">
                  <div className="font-medium text-sm">📖 Presentation</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Linear training flow covering policy, boundaries, and guidelines
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="font-medium text-sm">🧠 Interactive</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Scenarios, polls, role plays, and hands-on activities
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="font-medium text-sm">📚 Information Index</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Reference materials, policies, and support resources
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button asChild>
                <Link href="/presenter?module=opening-story">
                  Begin Training
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/policy">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Policy
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Links</CardTitle>
            <CardDescription>Access additional resources and pages</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/">Landing Page</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/scenarios">Scenarios</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/resources">Resources</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/feedback">Feedback</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show module content when a module is selected
  return (
    <div className="flex flex-col gap-6">
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Training Module: {module}</CardTitle>
          <CardDescription>
            Module content will be displayed here
          </CardDescription>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="text-muted-foreground">
            This is a placeholder for the training module content. In the full implementation, 
            each module would display its specific training materials, slides, and interactive elements here.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Current Module ID:</strong> {module}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


