// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quoted On-chain",
  description:
    "Minimalist node-runner rigs for Polkadot, Ethereum, Solana and beyond.",
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
          {/* Background video – bright, softly blurred */}
          <video
            id="bg-video"
            autoPlay
            loop
            muted
            playsInline
            className="fixed inset-0 h-full w-full object-cover brightness-[1.1] blur-[4px] z-[-2]"
          >
            <source src="/video/gbcvideo.mp4" type="video/mp4" />
          </video>

          {/* White frosted overlay for a soft, faded look (not dark) */}
          <div className="pointer-events-none fixed inset-0 bg-white/20 backdrop-blur-[2px] z-[-1]" />

          {/* Foreground content */}
          <div className="relative z-10 flex min-h-screen flex-col">
            <header className="border-b border-[#ff2ea8]/40 bg-black/30 shadow-[0_0_14px_#ff2ea855]">
              <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/logos/quotedtech.jpg"
                    alt="Quoted Tech logo"
                    width={40}
                    height={40}
                    className="h-9 w-9 rounded-full border border-[#ff2ea8]/60 object-cover shadow-[0_0_10px_#ff2ea866]"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-white drop-shadow-[0_0_6px_rgba(255,46,168,0.5)]">
                      Quoted On-chain
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.22em] text-neutral-300">
                      Node runner rigs
                    </span>
                  </div>
                </Link>

                <nav className="flex items-center gap-4 text-xs font-medium text-neutral-200">
                  <Link
                    href="/node-runner-pc"
                    className="rounded-full border border-transparent px-3 py-1.5 text-neutral-200 transition hover:border-[#ff2ea8]/60 hover:bg-[#ff2ea8]/15 hover:text-white hover:shadow-[0_0_12px_#ff2ea8aa]"
                  >
                    Node runner PC
                  </Link>
                  <Link
                    href="/nodes"
                    className="rounded-full border border-transparent px-3 py-1.5 text-neutral-200 transition hover:border-[#22e5ff]/60 hover:bg-[#22e5ff]/10 hover:text-white hover:shadow-[0_0_12px_#22e5ffaa]"
                  >
                    Node matrix
                  </Link>
                </nav>
              </div>

              {/* Thin neon line under header */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#ff2ea8] to-transparent opacity-80" />
            </header>

            <main className="flex-1">
              <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 md:px-8 lg:py-10">
                {children}
              </div>
            </main>

            <footer className="border-t border-[#22e5ff]/30 bg-black/40 shadow-[0_0_10px_#22e5ff55]">
              <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 text-[0.7rem] text-neutral-300 md:px-8">
                <span>© {new Date().getFullYear()} Quoted On-chain.</span>
                <span className="hidden md:inline text-neutral-200 drop-shadow-[0_0_6px_rgba(34,229,255,0.5)]">
                  Built for humans who actually run their own nodes.
                </span>
              </div>
            </footer>

            {/* Mute / Unmute Button */}
            <div className="fixed bottom-6 right-6 z-20">
              <button
                id="sound-toggle"
                className="px-4 py-2 rounded-full bg-black/60 border border-[#ff2ea8]/50 text-white text-xs shadow-[0_0_10px_#ff2ea866] hover:bg-black/80 transition"
              >
                🔇 Unmute
              </button>
            </div>
          </div>
        </div>

        {/* Script to wire up the sound toggle */}
        <Script id="bg-video-sound-toggle" strategy="afterInteractive">
          {`
            const btn = document.getElementById('sound-toggle');
            const video = document.getElementById('bg-video');

            if (btn && video) {
              btn.addEventListener('click', () => {
                if (video.muted) {
                  video.muted = false;
                  btn.textContent = "🔊 Mute";
                } else {
                  video.muted = true;
                  btn.textContent = "🔇 Unmute";
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
