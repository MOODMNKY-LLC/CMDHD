"use client";

import QRCode from "react-qr-code";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TrainingQRCodeProps {
  size?: number;
  showUrl?: boolean;
  title?: string;
  description?: string;
}

export function TrainingQRCode({ 
  size = 256,
  showUrl = true,
  title = "Quick Access",
  description = "Scan to join training on your phone"
}: TrainingQRCodeProps) {
  // Get base URL from environment or use fallback
  const baseUrl = 
    process.env.NEXT_PUBLIC_BASE_URL || 
    (typeof window !== 'undefined' && window.location.origin) ||
    'http://localhost:3000';
  
  const signUpUrl = `${baseUrl}/auth/sign-up`;

  return (
    <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 pb-6">
        <div className="bg-white p-4 rounded-lg">
          <QRCode 
            value={signUpUrl}
            size={size}
            level="H" // High error correction for better scanning
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>
        
        {showUrl && (
          <div className="text-center space-y-2 max-w-full">
            <p className="text-sm font-mono bg-muted px-3 py-2 rounded break-all">
              {signUpUrl}
            </p>
            <p className="text-xs text-muted-foreground">
              Or type this URL in your browser
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/**
 * Larger version for presentation slides
 * Optimized for scanning from distance
 */
export function PresentationQRCode() {
  const baseUrl = 
    process.env.NEXT_PUBLIC_BASE_URL || 
    (typeof window !== 'undefined' && window.location.origin) ||
    'http://localhost:3000';
  
  const signUpUrl = `${baseUrl}/auth/sign-up`;

  return (
    <div className="flex flex-col items-center gap-8 p-8 text-center">
      <h2 className="text-4xl font-bold">
        Welcome! Scan to Access Training
      </h2>
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl">
        <QRCode 
          value={signUpUrl}
          size={400}
          level="H"
          bgColor="#ffffff"
          fgColor="#000000"
        />
      </div>
      
      <div className="space-y-6 max-w-2xl">
        <p className="text-2xl font-semibold font-mono bg-muted px-6 py-3 rounded-lg">
          {signUpUrl}
        </p>
        
        <div className="text-left">
          <p className="text-xl font-semibold mb-4">How to Join:</p>
          <ol className="text-lg space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</span>
              <span>Open your phone&apos;s camera app</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</span>
              <span>Point it at the QR code above</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</span>
              <span>Tap the notification that appears</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</span>
              <span>Create your account to begin</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

