"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, Circle, MessageCircle, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { PolicyCard } from "./policy-card";
import { cn } from "@/lib/utils";
import type {
  Slide,
  TitleSlide,
  ContentSlide,
  PollSlide,
  ReflectionSlide,
  TableSlide,
  QuoteSlide,
  TreeSlide,
} from "@/lib/data/presentation-slides";

// Helper function to parse and render structured content
interface ParsedContent {
  type: 'header' | 'content' | 'bullet';
  header?: string;
  content: string;
}

function parseContentPoint(point: string): ParsedContent {
  // Check if it starts with **Header**: pattern
  const headerMatch = point.match(/^\*\*(.+?)\*\*:\s*(.+)$/);
  if (headerMatch) {
    return {
      type: 'header',
      header: headerMatch[1],
      content: headerMatch[2]
    };
  }
  
  // Check if it starts with bullet (•)
  if (point.startsWith('•')) {
    return {
      type: 'bullet',
      content: point.substring(1).trim()
    };
  }
  
  // Regular content
  return {
    type: 'content',
    content: point
  };
}

interface SlideRendererProps {
  slide: Slide;
}

export function SlideRenderer({ slide }: SlideRendererProps) {
  switch (slide.type) {
    case 'title':
      return <TitleSlideComponent slide={slide as TitleSlide} />;
    case 'content':
      return <ContentSlideComponent slide={slide as ContentSlide} />;
    case 'poll':
      return <PollSlideComponent slide={slide as PollSlide} />;
    case 'reflection':
      return <ReflectionSlideComponent slide={slide as ReflectionSlide} />;
    case 'table':
      return <TableSlideComponent slide={slide as TableSlide} />;
    case 'quote':
      return <QuoteSlideComponent slide={slide as QuoteSlide} />;
    case 'tree':
      return <TreeSlideComponent slide={slide as TreeSlide} />;
    default:
      return <div>Unknown slide type</div>;
  }
}

function TitleSlideComponent({ slide }: { slide: TitleSlide }) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[calc(100vh-200px)] text-center px-12">
      <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight">
        {slide.title}
      </h1>
      {slide.subtitle && (
        <p className="text-3xl text-muted-foreground mb-10 max-w-4xl">{slide.subtitle}</p>
      )}
      {slide.quote && (
        <p className="text-xl text-muted-foreground italic max-w-3xl">{slide.quote}</p>
      )}
    </div>
  );
}

function ContentSlideComponent({ slide }: { slide: ContentSlide }) {
  const [pollResponse, setPollResponse] = useState<number | null>(null);

  // Special layout for County-Specific Scenarios slide
  if (slide.title === 'County-Specific Scenarios') {
    return (
      <div className="flex flex-col justify-center min-h-[calc(100vh-200px)] max-w-6xl mx-auto py-12 px-8">
        <div className="mb-8 text-center">
          <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each county in our district faces unique relational challenges and boundary pressures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Arenac County */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl">Arenac County</CardTitle>
              <CardDescription className="text-base">&ldquo;Everyone knows everyone&rdquo;</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Tight-knit communities where anonymity is impossible
              </p>
            </CardContent>
          </Card>

          {/* Clare/Gladwin County */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl">Clare/Gladwin</CardTitle>
              <CardDescription className="text-base">Limited resources</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Long waitlists and few alternative providers create pressure to overextend
              </p>
            </CardContent>
          </Card>

          {/* Isabella County */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl">Isabella County</CardTitle>
              <CardDescription className="text-base">Campus and tribal contexts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Dual relationships with college students and Indigenous community members
              </p>
            </CardContent>
          </Card>

          {/* Osceola/Roscommon County */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl">Osceola/Roscommon</CardTitle>
              <CardDescription className="text-base">Rural overlaps</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Geographic isolation and provider shortages compound boundary challenges
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              Group Discussion Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <Badge variant="default" className="mt-1 h-6 w-6 flex items-center justify-center p-0 shrink-0">1</Badge>
                <span>What boundary tension does this scenario create?</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="default" className="mt-1 h-6 w-6 flex items-center justify-center p-0 shrink-0">2</Badge>
                <span>Which policy/policies apply? (Cite specific numbers)</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="default" className="mt-1 h-6 w-6 flex items-center justify-center p-0 shrink-0">3</Badge>
                <span>What would you do? Use the 5-Step Decision Tree</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="default" className="mt-1 h-6 w-6 flex items-center justify-center p-0 shrink-0">4</Badge>
                <span>When would you consult your supervisor?</span>
              </li>
            </ol>
            <p className="text-base text-muted-foreground italic mt-6 text-center">
              Remember: The goal isn&apos;t to have perfect answers—it&apos;s to practice the thinking process.
            </p>
          </CardContent>
        </Card>

        {slide.facilitatorNotes && slide.facilitatorNotes.length > 0 && (
          <Alert className="mt-6">
            <AlertDescription>
              <p className="font-semibold mb-1">Facilitator Notes:</p>
              <ul className="space-y-1 text-sm">
                {slide.facilitatorNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}
      </div>
    );
  }

  // Default content slide layout
  // Determine if this is a content-heavy slide (many talking points)
  const isContentHeavy = slide.talkingPoints.length > 5;
  
  return (
    <div className={cn(
      "flex flex-col h-full max-w-5xl mx-auto overflow-hidden",
      isContentHeavy ? "py-6 px-8" : "py-12 px-8 justify-center"
    )}>
      {/* Policy reference badge (compact, top) */}
      {slide.policyReference && (
        <div className={isContentHeavy ? "mb-3" : "mb-6"}>
          <PolicyCard policy={slide.policyReference} variant="compact" />
        </div>
      )}

      <div className={isContentHeavy ? "mb-4" : "mb-8"}>
        <h2 className={cn(
          "font-bold mb-3",
          isContentHeavy ? "text-4xl" : "text-5xl"
        )}>{slide.title}</h2>
        {slide.subtitle && (
          <p className={cn(
            "text-muted-foreground mb-2",
            isContentHeavy ? "text-xl" : "text-2xl"
          )}>{slide.subtitle}</p>
        )}
        {slide.objective && (
          <p className={cn(
            "text-muted-foreground italic",
            isContentHeavy ? "text-lg" : "text-xl"
          )}>
            Objective: {slide.objective}
          </p>
        )}
      </div>

      <Card className="flex-1 border-2 overflow-hidden flex flex-col">
        <CardContent className={cn(
          "flex-1 overflow-hidden",
          isContentHeavy ? "pt-4 pb-4" : "pt-8 pb-8"
        )}>
          <div className={cn(
            "h-full overflow-y-auto scrollbar-hide",
            isContentHeavy ? "space-y-3" : "space-y-6"
          )}>
            {slide.talkingPoints.map((point, index) => {
              const parsed = parseContentPoint(point);
              
              if (parsed.type === 'header') {
                return (
                  <div key={index} className="space-y-1.5">
                    {index > 0 && <Separator className={isContentHeavy ? "my-2" : "my-4"} />}
                    <div className="flex items-start gap-3">
                      <Badge variant="default" className="mt-1 shrink-0 text-xs px-2.5 py-0.5">
                        {parsed.header}
                      </Badge>
                    </div>
                    <p className={cn(
                      "text-muted-foreground pl-2",
                      isContentHeavy ? "text-base leading-snug" : "text-lg leading-relaxed"
                    )}>
                      {parsed.content}
                    </p>
                  </div>
                );
              }
              
              if (parsed.type === 'bullet') {
                return (
                  <div key={index} className="flex items-start gap-2 pl-6">
                    <ChevronRight className={cn(
                      "mt-0.5 text-primary shrink-0",
                      isContentHeavy ? "h-4 w-4" : "h-5 w-5"
                    )} />
                    <span className={cn(
                      isContentHeavy ? "text-base leading-snug" : "text-lg leading-relaxed"
                    )}>{parsed.content}</span>
                  </div>
                );
              }
              
              return (
                <div key={index} className="flex items-start gap-3">
                  <Circle className={cn(
                    "fill-primary text-primary shrink-0",
                    isContentHeavy ? "h-2 w-2 mt-1.5" : "h-2.5 w-2.5 mt-2"
                  )} />
                  <span className={cn(
                    isContentHeavy ? "text-base leading-snug" : "text-lg leading-relaxed"
                    )}>{parsed.content}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {slide.interactive && (
        <Card className="mb-6 border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              {slide.interactive.type === 'poll' ? 'Quick Poll' : 'Discussion'}
            </CardTitle>
            <CardDescription className="text-base">
              {slide.interactive.prompt}
            </CardDescription>
          </CardHeader>
          {slide.interactive.options && (
            <CardContent>
              <div className="space-y-2">
                {slide.interactive.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={pollResponse === index ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto py-3"
                    onClick={() => setPollResponse(index)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      )}

      {slide.facilitatorNotes && slide.facilitatorNotes.length > 0 && (
        <Alert>
          <AlertDescription>
            <p className="font-semibold mb-1">Facilitator Notes:</p>
            <ul className="space-y-1 text-sm">
              {slide.facilitatorNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

function PollSlideComponent({ slide }: { slide: PollSlide }) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // Reset state when slide changes
  useEffect(() => {
    setSelectedOption(null);
    setShowAnswer(false);
  }, [slide.id]);

  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-200px)] max-w-4xl mx-auto py-12 px-8">
      <div className="mb-10 text-center">
        <Badge className="mb-6 text-base px-4 py-2">{slide.boundaryFocus}</Badge>
        <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Scenario</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {slide.scenario}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-semibold mb-4 text-lg">{slide.question}</p>
          <div className="space-y-3">
            {slide.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedOption === index ? "default" : "outline"}
                className="w-full justify-start text-left h-auto py-4 px-6"
                onClick={() => {
                  setSelectedOption(index);
                  setShowAnswer(true);
                }}
              >
                <span className="mr-3 font-bold">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {showAnswer && (
        <Card 
          className="border-primary cursor-pointer hover:border-primary/70 transition-colors"
          onClick={() => setShowAnswer(false)}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Explanation
              </span>
              <span className="text-sm text-muted-foreground font-normal">Click to hide</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-lg leading-relaxed">{slide.explanation}</p>
            {slide.policyReference && (
              <Badge variant="outline" className="text-sm">
                {slide.policyReference}
              </Badge>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function ReflectionSlideComponent({ slide }: { slide: ReflectionSlide }) {
  const [response, setResponse] = useState("");

  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-200px)] max-w-4xl mx-auto py-12 px-8">
      <div className="mb-10 text-center">
        <h2 className="text-5xl font-bold mb-6">{slide.title}</h2>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl">{slide.prompt}</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder={slide.placeholder || "Your reflection..."}
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className="min-h-[200px] text-lg"
          />
          <Button className="mt-4 w-full" size="lg">
            Submit (Anonymous)
          </Button>
        </CardContent>
      </Card>

      {slide.talkingPoints && slide.talkingPoints.length > 0 && (
        <Alert>
          <AlertDescription>
            {slide.talkingPoints.map((point, index) => (
              <p key={index} className="text-sm">{point}</p>
            ))}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

function TableSlideComponent({ slide }: { slide: TableSlide }) {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-200px)] max-w-6xl mx-auto py-12 px-8">
      <div className="mb-8">
        <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                {slide.headers.map((header, index) => (
                  <TableHead key={index} className="font-bold text-base">
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {slide.rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex} className="text-base py-4">
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {slide.facilitatorNote && (
        <Alert className="mt-6">
          <AlertDescription>{slide.facilitatorNote}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}

function QuoteSlideComponent({ slide }: { slide: QuoteSlide }) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[calc(100vh-200px)] text-center px-12">
      <blockquote className="text-5xl font-serif italic mb-10 leading-relaxed max-w-4xl">
        &ldquo;{slide.quote}&rdquo;
      </blockquote>
      {slide.author && (
        <p className="text-2xl text-muted-foreground">— {slide.author}</p>
      )}
      {slide.context && (
        <p className="text-xl text-muted-foreground mt-8 max-w-3xl leading-relaxed">
          {slide.context}
        </p>
      )}
    </div>
  );
}

function TreeSlideComponent({ slide }: { slide: TreeSlide }) {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-200px)] max-w-5xl mx-auto py-12 px-8">
      <div className="mb-10 text-center">
        <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
      </div>

      <div className="space-y-4 mb-6">
        {slide.steps.map((step, index) => (
          <Card key={index} className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Badge variant="default" className="text-lg px-4 py-2">
                  {step.number}
                </Badge>
                <span className="text-2xl">{step.title}</span>
              </CardTitle>
              <CardDescription className="text-base ml-14">
                {step.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {slide.facilitatorNotes && slide.facilitatorNotes.length > 0 && (
        <Alert>
          <AlertDescription>
            <p className="font-semibold mb-1">Key Emphasis:</p>
            <ul className="space-y-1">
              {slide.facilitatorNotes.map((note, index) => (
                <li key={index} className="text-sm">{note}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

