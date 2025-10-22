import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Presentation, BookOpen, Users } from "lucide-react";
import { RetroGrid } from "@/components/ui/retro-grid";

export default function Home() {
  return (
    <main className="relative min-h-dvh">
      <div className="absolute inset-0 -z-10">
        <RetroGrid angle={70} cellSize={70} opacity={0.25} darkLineColor="#1f2941" lightLineColor="#cbd5e1" />
      </div>
      <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">CMDHD Professional Boundaries</h1>
          <div className="flex gap-2">
            <Button asChild variant="secondary">
              <a href="/docs/slide-deck.md" target="_blank">Slide Deck</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="/docs/boundaries-training-scaffold.md" target="_blank">Training Scaffold</a>
            </Button>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl">Professional Boundaries Training</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
              <p>
                Clear boundaries protect clients and staff, prevent role confusion, and
                support ethical, consistent care across our six-county region.
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <a href="/docs/slide-deck.md" target="_blank">Open Slides</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/docs/cmdhd-professional-boundaries-policy.md" target="_blank">Policy</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="relative">
            <HeroVideoDialog
              videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
              thumbnailSrc="/next.svg"
              className="rounded-xl"
            />
          </div>
        </div>

        <BentoGrid className="mt-8">
          <BentoCard
            name="Policy Foundations"
            description="Scope, conflicts of interest, social media, gifts, consent & communication."
            href="/docs/cmdhd-professional-boundaries-policy.md"
            cta="View policy"
            className="col-span-3 md:col-span-1"
            Icon={BookOpen}
            background={<div className="absolute inset-0 bg-primary/5" />}
          />
          <BentoCard
            name="Local Context"
            description="Rural factors, provider shortages, seniors & disability stats across 6 counties."
            href="/docs/boundaries-training-scaffold.md"
            cta="Read context"
            className="col-span-3 md:col-span-1"
            Icon={Users}
            background={<div className="absolute inset-0 bg-accent/5" />}
          />
          <BentoCard
            name="Scenarios & Scripts"
            description="Transportation, dual relationships, social media, public encounters—with model phrasing."
            href="/docs/boundaries-training-scaffold.md#11.-scenario-based-group-discussion-15-minutes-	6-interactive-practice-with-realistic-situations,-focusing-on-adapting-boundaries-to-local-challenges."
            cta="Practice"
            className="col-span-3 md:col-span-1"
            Icon={Presentation}
            background={<div className="absolute inset-0 bg-primary/5" />}
          />
        </BentoGrid>
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold">County Links</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Card>
              <CardHeader><CardTitle className="text-base">Arenac</CardTitle></CardHeader>
              <CardContent>
                <a className="underline" href="https://www.countyhealthrankings.org/health-data/michigan/arenac?year=2025" target="_blank">County Health Rankings</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">Clare</CardTitle></CardHeader>
              <CardContent>
                <a className="underline" href="https://www.countyhealthrankings.org/health-data/michigan/clare?year=2025" target="_blank">County Health Rankings</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">Gladwin</CardTitle></CardHeader>
              <CardContent>
                <a className="underline" href="https://www.countyhealthrankings.org/health-data/michigan/gladwin?year=2025" target="_blank">County Health Rankings</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">Isabella</CardTitle></CardHeader>
              <CardContent>
                <a className="underline" href="https://www.countyhealthrankings.org/health-data/michigan/isabella?year=2025" target="_blank">County Health Rankings</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">Osceola</CardTitle></CardHeader>
              <CardContent>
                <a className="underline" href="https://www.countyhealthrankings.org/health-data/michigan/osceola?year=2025" target="_blank">County Health Rankings</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">Roscommon</CardTitle></CardHeader>
              <CardContent>
                <a className="underline" href="https://www.countyhealthrankings.org/health-data/michigan/roscommon?year=2025" target="_blank">County Health Rankings</a>
              </CardContent>
            </Card>
          </div>
        </section>
      </section>
    </main>
  )
}
