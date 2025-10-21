'use client'

import { useState, useTransition } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { submitFeedback } from "@/app/protected/actions";
import { MessageSquare, CheckCircle2, Star } from "lucide-react";
import type { Feedback } from "@/lib/types/database";

interface FeedbackFormCardProps {
  existingFeedback: Feedback | null;
}

export function FeedbackFormCard({ existingFeedback }: FeedbackFormCardProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(!existingFeedback);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setSuccess(false);
    
    startTransition(async () => {
      const result = await submitFeedback({
        rating: formData.get('rating') ? parseInt(formData.get('rating') as string) : undefined,
        most_valuable: formData.get('most_valuable') as string || undefined,
        questions_remaining: formData.get('questions_remaining') as string || undefined,
        improvement_suggestions: formData.get('improvement_suggestions') as string || undefined,
        one_word_takeaway: formData.get('one_word_takeaway') as string || undefined,
      });
      
      if (result?.error) {
        setError(result.error);
      } else {
        setSuccess(true);
        setIsEditing(false);
      }
    });
  };

  if (existingFeedback && !isEditing) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Training Feedback
              </CardTitle>
              <CardDescription>Your feedback has been submitted</CardDescription>
            </div>
            <Badge variant="default" className="bg-green-600 hover:bg-green-700">
              <CheckCircle2 className="mr-1 h-3 w-3" />
              Submitted
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-muted p-4 space-y-3">
            {existingFeedback.rating && (
              <div>
                <p className="text-sm font-medium mb-1">Rating</p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < existingFeedback.rating!
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {existingFeedback.one_word_takeaway && (
              <div>
                <p className="text-sm font-medium mb-1">One Word Takeaway</p>
                <p className="text-sm text-muted-foreground">{existingFeedback.one_word_takeaway}</p>
              </div>
            )}
          </div>
          
          <Button
            variant="outline"
            onClick={() => setIsEditing(true)}
            className="w-full"
          >
            Edit Feedback
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Training Feedback
        </CardTitle>
        <CardDescription>
          Help us improve future training sessions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-6">
          {/* Rating */}
          <div className="space-y-3">
            <Label htmlFor="rating">Overall Training Rating</Label>
            <RadioGroup
              defaultValue={existingFeedback?.rating?.toString()}
              name="rating"
              className="flex gap-2"
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value} className="flex items-center">
                  <RadioGroupItem value={value.toString()} id={`rating-${value}`} />
                  <Label htmlFor={`rating-${value}`} className="ml-2 cursor-pointer">
                    {value}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Most Valuable */}
          <div className="space-y-2">
            <Label htmlFor="most_valuable">
              Which learning objective was most valuable?
            </Label>
            <Textarea
              id="most_valuable"
              name="most_valuable"
              placeholder="E.g., The 5-Step Decision Tree, understanding dual relationships..."
              defaultValue={existingFeedback?.most_valuable || ''}
              rows={2}
            />
          </div>

          {/* Questions Remaining */}
          <div className="space-y-2">
            <Label htmlFor="questions_remaining">
              What boundary challenges do you still have questions about?
            </Label>
            <Textarea
              id="questions_remaining"
              name="questions_remaining"
              placeholder="Share any remaining questions or concerns..."
              defaultValue={existingFeedback?.questions_remaining || ''}
              rows={2}
            />
          </div>

          {/* Improvements */}
          <div className="space-y-2">
            <Label htmlFor="improvement_suggestions">
              What would improve this training?
            </Label>
            <Textarea
              id="improvement_suggestions"
              name="improvement_suggestions"
              placeholder="Suggestions for content, format, timing, etc..."
              defaultValue={existingFeedback?.improvement_suggestions || ''}
              rows={2}
            />
          </div>

          {/* One Word */}
          <div className="space-y-2">
            <Label htmlFor="one_word_takeaway">
              In one word, what are you leaving with today?
            </Label>
            <input
              type="text"
              id="one_word_takeaway"
              name="one_word_takeaway"
              placeholder="e.g., Clarity, Tools, Confidence..."
              defaultValue={existingFeedback?.one_word_takeaway || ''}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              maxLength={30}
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          {success && (
            <div className="rounded-lg bg-green-50 dark:bg-green-950/20 p-3 text-sm text-green-700 dark:text-green-400">
              <CheckCircle2 className="inline mr-2 h-4 w-4" />
              Feedback submitted successfully!
            </div>
          )}

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? 'Submitting...' : existingFeedback ? 'Update Feedback' : 'Submit Feedback'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

