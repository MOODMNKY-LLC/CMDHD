"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, Circle, MessageCircle } from "lucide-react";
import { useState } from "react";
import { PolicyCard } from "./policy-card";
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

  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-200px)] max-w-5xl mx-auto py-12 px-8">
      {/* Policy reference badge (compact, top) */}
      {slide.policyReference && (
        <div className="mb-6">
          <PolicyCard policy={slide.policyReference} variant="compact" />
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
        {slide.subtitle && (
          <p className="text-2xl text-muted-foreground mb-2">{slide.subtitle}</p>
        )}
        {slide.objective && (
          <p className="text-xl text-muted-foreground italic">
            Objective: {slide.objective}
          </p>
        )}
      </div>

      <Card className="mb-6">
        <CardContent className="pt-8 pb-8">
          <ul className="space-y-5">
            {slide.talkingPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <Circle className="h-3 w-3 mt-2 fill-primary text-primary flex-shrink-0" />
                <span className="text-xl leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
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
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Explanation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-lg">{slide.explanation}</p>
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

