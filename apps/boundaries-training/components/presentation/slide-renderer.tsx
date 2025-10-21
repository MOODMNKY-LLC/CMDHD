"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, Circle, MessageCircle, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { PolicyCard } from "./policy-card";
import { FacilitatorNotes } from "./facilitator-notes";
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

        <FacilitatorNotes notes={slide.facilitatorNotes} />
      </div>
    );
  }

  // Default content slide layout
  // Determine if this is a content-heavy slide (many talking points)
  const isContentHeavy = slide.talkingPoints.length > 5;
  
  return (
    <div className="flex flex-col h-full justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Policy reference badge (compact, top) */}
        {slide.policyReference && (
          <div className="mb-6">
            <PolicyCard policy={slide.policyReference} variant="compact" />
          </div>
        )}

        {/* Header Section */}
        <div className="space-y-3">
          <h2 className={cn(
            "font-bold",
            isContentHeavy ? "text-4xl sm:text-5xl" : "text-5xl sm:text-6xl"
          )}>{slide.title}</h2>
          {slide.subtitle && (
            <p className={cn(
              "text-muted-foreground",
              isContentHeavy ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
            )}>{slide.subtitle}</p>
          )}
          {slide.objective && (
            <p className={cn(
              "text-muted-foreground italic",
              isContentHeavy ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
            )}>
              {slide.objective}
            </p>
          )}
        </div>

        {/* Content Section */}
        <div className={cn(
          "w-full",
          isContentHeavy ? "space-y-6" : "space-y-8"
        )}>
          {slide.talkingPoints.map((point, index) => {
            const parsed = parseContentPoint(point);
            
            if (parsed.type === 'header') {
              return (
                <div key={index}>
                  {index > 0 && <Separator className={cn(
                    "mb-6",
                    isContentHeavy ? "mt-5" : "mt-7"
                  )} />}
                  <div className="space-y-4">
                    <h3 className={cn(
                      "font-bold text-primary border-l-4 border-primary pl-5",
                      isContentHeavy ? "text-2xl" : "text-3xl"
                    )}>
                      {parsed.header}
                    </h3>
                    <p className={cn(
                      "text-foreground pl-5 leading-relaxed",
                      isContentHeavy ? "text-xl" : "text-2xl"
                    )}>
                      {parsed.content}
                    </p>
                  </div>
                </div>
              );
            }
            
            if (parsed.type === 'bullet') {
              return (
                <div key={index} className="flex items-start gap-4 pl-8">
                  <ChevronRight className={cn(
                    "mt-1.5 text-primary shrink-0",
                    isContentHeavy ? "h-6 w-6" : "h-7 w-7"
                  )} />
                  <span className={cn(
                    "leading-relaxed",
                    isContentHeavy ? "text-xl" : "text-2xl"
                  )}>{parsed.content}</span>
                </div>
              );
            }
            
            return (
              <div key={index} className="flex items-start gap-5">
                <Circle className={cn(
                  "fill-primary text-primary shrink-0",
                  isContentHeavy ? "h-3.5 w-3.5 mt-2.5" : "h-4 w-4 mt-3"
                )} />
                <span className={cn(
                  "leading-relaxed",
                  isContentHeavy ? "text-xl" : "text-2xl"
                  )}>{parsed.content}</span>
              </div>
            );
          })}
        </div>
      </div>

      {slide.discussionPrompt && (
        <Alert className="mt-6 border-primary/30 bg-primary/5">
          <MessageCircle className="h-4 w-4" />
          <AlertTitle>Discussion Question</AlertTitle>
          <AlertDescription className="text-base mt-2">
            {slide.discussionPrompt}
          </AlertDescription>
        </Alert>
      )}

      <FacilitatorNotes notes={slide.facilitatorNotes} />
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
    <div className="flex flex-col h-full justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-8 overflow-hidden">
      <div className="max-w-3xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1.5">
            {slide.boundaryFocus}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold">{slide.title}</h2>
        </div>

        {/* Scenario & Question */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">Scenario</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {slide.scenario}
            </p>
          </div>
          
          <p className="text-2xl font-semibold">{slide.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {slide.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedOption === index ? "default" : "outline"}
              className="w-full justify-start text-left h-auto py-4 px-6 text-lg min-h-[56px] touch-manipulation"
              onClick={() => {
                setSelectedOption(index);
                setShowAnswer(true);
              }}
            >
              <span className="mr-4 font-bold text-xl">
                {String.fromCharCode(65 + index)}.
              </span>
              <span className="flex-1">{option}</span>
            </Button>
          ))}
        </div>

        {/* Explanation (slide in from below) */}
        {showAnswer && (
          <div 
            className="mt-8 pt-6 border-t-2 border-primary/20 bg-primary/5 rounded-lg p-6 cursor-pointer hover:bg-primary/10 transition-colors animate-in slide-in-from-bottom-4 duration-300"
            onClick={() => setShowAnswer(false)}
          >
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-semibold">Explanation</h4>
                  <span className="text-sm text-muted-foreground">Click to hide ↑</span>
                </div>
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  {slide.explanation}
                </p>
                {slide.policyReference && (
                  <Badge variant="outline" className="text-sm">
                    {slide.policyReference}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ReflectionSlideComponent({ slide }: { slide: ReflectionSlide }) {
  const [response, setResponse] = useState("");

  return (
    <div className="flex flex-col h-full justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-8 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl sm:text-6xl font-bold">{slide.title}</h2>
          <p className="text-2xl text-muted-foreground">{slide.prompt}</p>
        </div>

        {/* Response Area */}
        <div className="space-y-4">
          <Textarea
            placeholder={slide.placeholder || "Your reflection..."}
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className="min-h-[240px] text-lg border-2 focus:border-primary resize-none"
          />
          <Button 
            className="w-full min-h-[56px] text-lg touch-manipulation" 
            size="lg"
            disabled={!response.trim()}
          >
            Submit (Anonymous)
          </Button>
        </div>

        {/* Helper text */}
        <p className="text-center text-sm text-muted-foreground italic">
          Your response is anonymous and will be used to improve future training sessions.
        </p>
      </div>

      <FacilitatorNotes notes={slide.talkingPoints} label="Discussion Points" />
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

      <FacilitatorNotes notes={slide.facilitatorNote ? [slide.facilitatorNote] : undefined} />
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

      <FacilitatorNotes notes={slide.facilitatorNotes} label="Key Emphasis" />
    </div>
  );
}

