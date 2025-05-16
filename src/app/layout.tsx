import "./globals.css"
import { Inter, Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  metadataBase: new URL("http://localhost:8000"),
  title: "CannaBlogSpot.de - Cannabis Anbau & Information",
  description: "Umfassende Informationen und Anleitungen zum Cannabis-Anbau, Pflege und medizinischer Anwendung",
  keywords: "Cannabis, Anbau, Pflege, Medizin, THC, CBD, Grow Guide",
  openGraph: {
    title: "CannaBlogSpot.de - Cannabis Anbau & Information",
    description: "Umfassende Informationen und Anleitungen zum Cannabis-Anbau, Pflege und medizinischer Anwendung",
    url: "https://cannablogspot.de",
    siteName: "CannaBlogSpot.de",
    locale: "de_DE",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
