// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quoted On-chain",
  description:
    "Quoted On-chain: premium node-ready PCs for Polkadot, Ethereum, and Solana, powered by Quoted Tech.",
  openGraph: {
    title: "Quoted On-chain – Node-ready PCs by Quoted Tech",
    description:
      "Minimalist, premium PC builds tuned for Polkadot, Ethereum, and Solana nodes.",
    images: [
      {
        url: "/logos/quotedtech.jpg",
        width: 800,
        height: 800,
        alt: "Quoted Tech logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quoted On-chain – Node-ready PCs by Quoted Tech",
    description:
      "Minimalist, premium PC builds tuned for Polkadot, Ethereum, and Solana nodes.",
    images: ["/logos/quotedtech.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-neutral-50">
        {/* Video background */}
        <video
          className="fixed inset-0 -z-20 h-full w-full object-cover"
          src="/video/gbcvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark overlay to control brightness / contrast */}
        <div className="fixed inset-0 -z-10 bg-black/65 backdrop-blur-sm" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-6">
          {/* Top nav */}
          <header className="mb-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/quotedtech.jpg"
                alt="Quoted Tech logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <Link
                href="/"
                className="text-lg font-semibold tracking-tight text-white"
              >
                Quoted On-chain
              </Link>
            </div>

            <nav className="flex items-center gap-4 text-sm text-neutral-200">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/node-runner-pc" className="hover:text-white">
                Builds
              </Link>
              <a
                href="https://quoted.tech/?utm_source=x&utm_medium=post&utm_campaign=polkadot"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-3 py-1 hover:bg-white hover:text-black transition"
              >
                View on Quoted
              </a>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-10 border-t border-white/10 pt-4 text-xs text-neutral-300">
            <p>
              © {new Date().getFullYear()} Quoted On-chain · Powered by Quoted
              Tech.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
