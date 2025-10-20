import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const counties: [string, string][] = [
  ["Arenac", "https://www.countyhealthrankings.org/health-data/michigan/arenac?year=2025"],
  ["Clare", "https://www.countyhealthrankings.org/health-data/michigan/clare?year=2025"],
  ["Gladwin", "https://www.countyhealthrankings.org/health-data/michigan/gladwin?year=2025"],
  ["Isabella", "https://www.countyhealthrankings.org/health-data/michigan/isabella?year=2025"],
  ["Osceola", "https://www.countyhealthrankings.org/health-data/michigan/osceola?year=2025"],
  ["Roscommon", "https://www.countyhealthrankings.org/health-data/michigan/roscommon?year=2025"],
];

export default function ParticipantsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">Participants</h1>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">County Links</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          {counties.map(([name, href]) => (
            <Card key={name}>
              <CardHeader><CardTitle className="text-base">{name}</CardTitle></CardHeader>
              <CardContent>
                <a className="underline" href={href} target="_blank">County Health Rankings</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}


