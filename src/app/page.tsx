"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Willkommen zu CannaBlogSpot.de
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Ihr umfassender Guide für Cannabis-Anbau, Pflege und medizinische Anwendung
          </p>
          <Button className="bg-white text-black hover:bg-gray-100">
            Mehr erfahren
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Unsere Hauptthemen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Anbau Card */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Anbauanleitungen</h3>
            <p className="text-gray-600 mb-4">
              Detaillierte Schritt-für-Schritt Anleitungen für den erfolgreichen Cannabis-Anbau.
            </p>
            <Button variant="outline" className="w-full">
              Zum Guide
            </Button>
          </Card>

          {/* Pflege Card */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Pflege & Wartung</h3>
            <p className="text-gray-600 mb-4">
              Tipps und Tricks zur optimalen Pflege Ihrer Pflanzen in jeder Wachstumsphase.
            </p>
            <Button variant="outline" className="w-full">
              Mehr erfahren
            </Button>
          </Card>

          {/* Medizin Card */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Medizinisches Spektrum</h3>
            <p className="text-gray-600 mb-4">
              Informationen zur medizinischen Anwendung und therapeutischen Wirkung.
            </p>
            <Button variant="outline" className="w-full">
              Entdecken
            </Button>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Newsletter Anmeldung</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bleiben Sie informiert über die neuesten Entwicklungen und Artikel rund um Cannabis-Anbau und Pflege.
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">
              Anmelden
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Über uns</h3>
              <p className="text-gray-400">
                CannaBlogSpot.de ist Ihre vertrauenswürdige Quelle für Cannabis-Anbau und Pflege.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Startseite</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Anbauanleitungen</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Rechtliches</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Impressum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Datenschutz</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 CannaBlogSpot.de. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
