"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { getAdjacentItems, trainingData } from "@/lib/data";

export default function TrainingPage() {
  const pathname = usePathname();
  const { previous, next } = getAdjacentItems(pathname);

  // Find current section and item for metadata
  const currentSection = trainingData.find((section) =>
    section.items.some((item) => item.href === pathname)
  );

  const currentItem = currentSection?.items.find((item) => item.href === pathname);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="space-y-2">
        {currentSection && (
          <Badge variant="secondary" className="mb-2">
            {currentSection.title}
          </Badge>
        )}
        <h1 className="text-4xl font-bold tracking-tight">
          {currentItem?.label || "Training Module"}
        </h1>
        {currentItem?.description && (
          <p className="text-lg text-muted-foreground">{currentItem.description}</p>
        )}
      </div>

      <Separator />

      {/* Main Content Card */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Module Content</CardTitle>
          <CardDescription>
            Detailed training material for this section
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          {/* Placeholder content - this would be replaced with actual training content */}
          <p>
            This is a placeholder for the training content. In a full implementation, this would contain:
          </p>
          <ul>
            <li>Detailed explanations and guidelines</li>
            <li>Real-world examples and scenarios</li>
            <li>Interactive exercises or quizzes</li>
            <li>Reference materials and resources</li>
            <li>Case studies and best practices</li>
          </ul>
          <p>
            Each training module would be customized with relevant content for professional boundaries
            training at CMDHD.
          </p>
          
          <div className="not-prose mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-semibold mb-2">Key Takeaways</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Understanding professional boundaries in rural health contexts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Practical application of CMDHD policies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Tools for navigating complex situations</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-6 border-t">
        <div>
          {previous ? (
            <Button asChild variant="outline" size="lg">
              <Link href={previous.href}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground">Previous</span>
                  <span className="max-w-[200px] truncate">{previous.label}</span>
                </div>
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline" size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          )}
        </div>

        <div>
          {next ? (
            <Button asChild size="lg" className="shadow-lg shadow-primary/25">
              <Link href={next.href}>
                <div className="flex flex-col items-end">
                  <span className="text-xs">Next</span>
                  <span className="max-w-[200px] truncate">{next.label}</span>
                </div>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild size="lg" className="shadow-lg shadow-primary/25">
              <Link href="/training/closing/evaluation">
                Complete Training
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

