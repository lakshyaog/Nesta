import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MotionProvider } from "@/components/motion-provider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const SITE_URL = "https://thenestaliving.in";
const SITE_DESCRIPTION =
  "Nestaliving offers comfortable, fully furnished PG residences at Jagat Farm and Alpha, Greater Noida. Experience Home.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nestaliving - Experience Home",
    template: "%s | Nestaliving",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "Nestaliving",
    title: "Nestaliving - Experience Home",
    description: SITE_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nestaliving - Experience Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nestaliving - Experience Home",
    description: SITE_DESCRIPTION,
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>
          <SiteHeader />
          <div className="flex flex-1 flex-col">{children}</div>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
