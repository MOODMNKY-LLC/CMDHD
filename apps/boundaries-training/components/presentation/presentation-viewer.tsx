"use client";

import { useState, useEffect, useCallback } from "react";
import { presentationSlides, presentationSections } from "@/lib/data/presentation-slides";
import { SlideRenderer } from "./slide-renderer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Menu,
  Clock,
  Home,
  BookOpen,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function PresentationViewer() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const currentSlide = presentationSlides[currentSlideIndex];
  const totalSlides = presentationSlides.length;
  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Navigation
  const goToNext = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const goToPrevious = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        setIsFullscreen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsFullscreen(false);
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setIsTimerRunning((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Fullscreen API
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className={cn(
      "flex flex-col h-screen bg-background",
      isFullscreen && "fixed inset-0 z-50"
    )}>
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link href="/presentation/facilitator-guide" target="_blank">
              <Button variant="outline" size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Facilitator Guide
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4 mr-2" />
                  Table of Contents
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Presentation Outline</SheetTitle>
                  <SheetDescription>
                    {totalSlides} slides • ~60 minutes
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  {presentationSections.map((section, sectionIdx) => {
                    const sectionSlides = presentationSlides.filter(
                      (s) => s.section === section
                    );
                    return (
                      <div key={section}>
                        <h3 className="font-semibold mb-2 text-sm text-muted-foreground">
                          {sectionIdx + 1}. {section}
                        </h3>
                        <div className="space-y-1">
                          {sectionSlides.map((slide) => (
                            <Button
                              key={slide.id}
                              variant={currentSlideIndex === slide.id - 1 ? "secondary" : "ghost"}
                              className="w-full justify-start text-left h-auto py-2"
                              onClick={() => goToSlide(slide.id - 1)}
                            >
                              <span className="text-xs text-muted-foreground mr-2">
                                {slide.id}
                              </span>
                              <span className="text-sm truncate">
                                {'title' in slide ? slide.title : 'Quote'}
                              </span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="outline" className="font-mono">
              Slide {currentSlideIndex + 1} / {totalSlides}
            </Badge>
            <Badge variant="secondary">
              {currentSlide.section}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsTimerRunning(!isTimerRunning)}
            >
              <Clock className="h-4 w-4 mr-2" />
              {formatTime(elapsedTime)}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      {/* Slide Content */}
      <div className="flex-1 overflow-y-auto">
        <SlideRenderer slide={currentSlide} />
      </div>

      {/* Footer Navigation */}
      <div className="border-t bg-background/95 backdrop-blur p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Button
            variant="outline"
            onClick={goToPrevious}
            disabled={currentSlideIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            {currentSlide.duration && (
              <span>Estimated time: {currentSlide.duration} min</span>
            )}
          </div>

          <Button
            variant="default"
            onClick={goToNext}
            disabled={currentSlideIndex === totalSlides - 1}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      {!isFullscreen && (
        <div className="fixed bottom-20 right-6 text-xs text-muted-foreground bg-background/80 backdrop-blur p-2 rounded border">
          <p>← → arrows: navigate • F: fullscreen • T: timer • Esc: exit</p>
        </div>
      )}
    </div>
  );
}

