// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quoted On-chain",
  description: "Minimalist node-runner rigs for Polkadot, Ethereum, Solana and beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black text-white"}>
        <div className="relative min-h-screen overflow-hidden">
          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed inset-0 h-full w-full object-cover brightness-[0.35] z-[-2]"
          >
            <source src="/video/gbcvideo.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay for contrast */}
          <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85 z-[-1]" />

          {/* Foreground content */}
          <div className="relative z-10 flex min-h-screen flex-col">
            <header className="border-b border-white/10 bg-black/50 backdrop-blur">
              <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 md:px-8">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/logos/quotedtech.jpg"
                    alt="Quoted Tech logo"
                    width={40}
                    height={40}
                    className="h-9 w-9 rounded-full border border-white/20 object-cover"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-white">
                      Quoted On-chain
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.22em] text-neutral-400">
                      Node runner rigs
                    </span>
                  </div>
                </Link>

                <nav className="flex items-center gap-4 text-xs font-medium text-neutral-200">
                  <Link
                    href="/node-runner-pc"
                    className="hover:text-white transition"
                  >
                    Node runner PC
                  </Link>
                  <Link
                    href="/nodes"
                    className="hover:text-white transition"
                  >
                    Node matrix
                  </Link>
                </nav>
              </div>
            </header>

            <main className="flex-1">
              <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 md:px-8 lg:py-10">
                {children}
              </div>
            </main>

            <footer className="border-t border-white/10 bg-black/60 backdrop-blur">
              <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 text-[0.7rem] text-neutral-400 md:px-8">
                <span>© {new Date().getFullYear()} Quoted On-chain.</span>
                <span className="hidden md:inline">
                  Built for humans who actually run their own nodes.
                </span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
