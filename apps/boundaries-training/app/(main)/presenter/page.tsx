import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PresenterPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">Presenter Console</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">On‑screen Media Controls</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/docs/slide-deck.md" target="_blank">Open Slides</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/docs/cmdhd-professional-boundaries-policy.md" target="_blank">Open Policy</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/docs/boundaries-training-scaffold.md" target="_blank">Training Scaffold</Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3 text-sm">
          <Link className="underline" href="/">Open Landing</Link>
          <Link className="underline" href="/participants">Participants Page</Link>
          <Link className="underline" href="/resources">Resources</Link>
          <Link className="underline" href="/feedback">Feedback</Link>
        </CardContent>
      </Card>
    </main>
  );
}


