import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { AppNavbar } from "@/components/AppNavbar";
import { Footer } from "@/components/Footer";
import { ThemeRegistry } from "@/theme";
import { SITE_URL, SUBHEADLINE, TAGLINE } from "@/utils/site";
import pkg from "../../package.json";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `DataForge — ${TAGLINE}`,
    template: "%s · DataForge",
  },
  description: SUBHEADLINE,
  keywords: [
    "synthetic data",
    "test data generation",
    ".NET",
    "dotnet",
    "mock data",
    "deterministic data",
    "data seeding",
    "open source",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "DataForge",
    title: `DataForge — ${TAGLINE}`,
    description: SUBHEADLINE,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `DataForge — ${TAGLINE}`,
    description: SUBHEADLINE,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1220",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DataForge",
  description: SUBHEADLINE,
  url: SITE_URL,
  applicationCategory: "DeveloperApplication",
  operatingSystem: ".NET",
  license: "https://opensource.org/licenses/MIT",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  sameAs: ["https://github.com/dataforge-net/dataforge"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeRegistry>
          <AppNavbar />
          <main id="main-content" style={{ minHeight: "60vh" }}>
            {children}
          </main>
          <Footer version={pkg.version} />
        </ThemeRegistry>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-30X3HCPVH4"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-30X3HCPVH4');`}
        </Script>
      </body>
    </html>
  );
}
