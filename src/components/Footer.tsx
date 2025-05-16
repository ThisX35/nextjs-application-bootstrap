import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Über uns</h3>
            <p className="text-sm text-muted-foreground">
              CannaBlogSpot.de ist Ihre vertrauenswürdige Quelle für Cannabis-Anbau und Pflege.
              Wir bieten fundierte Informationen und aktuelle Entwicklungen.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/anbauanleitungen" className="text-muted-foreground hover:text-foreground">
                  Anbauanleitungen
                </Link>
              </li>
              <li>
                <Link href="/pflege" className="text-muted-foreground hover:text-foreground">
                  Pflege & Wartung
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/medizin" className="text-muted-foreground hover:text-foreground">
                  Medizinisches Spektrum
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="text-muted-foreground hover:text-foreground">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-muted-foreground hover:text-foreground">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-muted-foreground hover:text-foreground">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Bleiben Sie informiert über die neuesten Entwicklungen und Artikel.
            </p>
            <form className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="max-w-[300px]"
              />
              <Button type="submit" className="w-fit">
                Anmelden
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 CannaBlogSpot.de. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
