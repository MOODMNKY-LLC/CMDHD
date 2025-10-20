import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky top-[100vh] border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-5xl px-6 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* About Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">About This Training</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Professional boundaries training for Central Michigan District Health Department staff across six counties.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/presenter" className="text-muted-foreground hover:text-foreground transition-colors">
                  Presentation
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-muted-foreground hover:text-foreground transition-colors">
                  Leave Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Central Michigan District Health Department</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Serving Arenac, Clare, Gladwin, Isabella, Osceola, and Roscommon counties.
            </p>
            <p className="text-xs text-muted-foreground">
              <a 
                href="https://www.cmdhd.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline"
              >
                Visit CMDHD Website
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Central Michigan District Health Department. Training Date: October 22, 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

