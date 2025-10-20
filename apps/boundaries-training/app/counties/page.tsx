import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { counties } from "@/lib/data";

export const metadata = {
  title: "Our Six Counties | CMDHD Training",
  description: "Serving Central Michigan's diverse rural communities across six counties.",
};

export default function CountiesPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-background via-background to-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our Six-County Region
            </h1>
            <p className="text-xl text-muted-foreground">
              Serving Central Michigan&apos;s diverse rural communities where professional boundaries matter most
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-12">
        {/* Introduction */}
        <section className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Built for mid-Michigan—small towns, close connections, and shared commitments. Our six counties face unique challenges that make professional boundaries both essential and complex. Understanding our region helps us serve with compassion and consistency.
          </p>
        </section>

        {/* Counties Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {counties.map((county) => (
            <Card key={county.name} className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-between">
                  <span>{county.name} County</span>
                  <MapPin className="w-5 h-5 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{county.pop}</div>
                    <div className="text-xs text-muted-foreground">Population</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{county.seniors}</div>
                    <div className="text-xs text-muted-foreground">Seniors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{county.poverty}</div>
                    <div className="text-xs text-muted-foreground">Poverty</div>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <a href={county.href} target="_blank" rel="noopener noreferrer">
                    View Health Rankings
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Context Cards */}
        <section className="grid md:grid-cols-3 gap-6 pt-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-lg">Economic Challenges</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong className="text-foreground">Clare County:</strong> Median income ~$37k (vs. $55k state avg), 49% below 200% poverty line</p>
              <p className="text-xs italic pt-2">Limited resources create complex boundary situations</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-lg">Aging Population</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong className="text-foreground">Roscommon:</strong> 31% seniors (vs. 16% statewide), 26% disability rate</p>
              <p className="text-xs italic pt-2">High-need populations require careful boundary maintenance</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-lg">Rural Healthcare Gaps</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong className="text-foreground">Gladwin & Osceola:</strong> Zero OB/GYNs in-county, minimal psychiatric care</p>
              <p className="text-xs italic pt-2">&quot;Everyone knows everyone&quot; in tight-knit communities</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

