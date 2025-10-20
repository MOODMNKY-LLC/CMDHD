"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface RetroGridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  angle?: number;
  cellSize?: number;
  opacity?: number;
  lightLineColor?: string;
  darkLineColor?: string;
}

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
  ...props
}: RetroGridProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, []);

  const lineColor = isDark ? darkLineColor : lightLineColor;

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden",
        className,
      )}
      style={{
        perspective: "200px",
        opacity,
      }}
      {...props}
    >
      <div 
        className="absolute inset-0"
        style={{
          transform: `rotateX(${angle}deg)`,
        }}
      >
        <div 
          className="animate-grid"
          style={{
            position: "absolute",
            inset: "0% 0px",
            marginLeft: "-200%",
            height: "300vh",
            width: "600vw",
            transformOrigin: "100% 0 0",
            backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 0), linear-gradient(to bottom, ${lineColor} 1px, transparent 0)`,
            backgroundSize: `${cellSize}px ${cellSize}px`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
}


