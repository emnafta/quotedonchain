// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ChainLogo } from "@/components/ChainLogo";

const QUOTED_URL =
  "https://quoted.tech/?utm_source=x&utm_medium=post&utm_campaign=polkadot";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-black/60 p-8 shadow-xl shadow-black/40 backdrop-blur-md">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-3">
              <Image
                src="/logos/quotedtech.jpg"
                alt="Quoted Tech logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="text-xs uppercase tracking-[0.22em] text-neutral-300">
                Quoted On-chain
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Minimalist premium rigs for on-chain maximalists.
            </h1>
            <p className="mt-3 text-sm text-neutral-200">
              Quoted On-chain is a curated line of node-ready PCs for
              Polkadot, Ethereum, and Solana. Built by{" "}
              <span className="font-semibold">Quoted Tech</span>, tuned for
              24/7 uptime, and styled for the studio, lab, or gaming den.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/node-runner-pc"
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-neutral-200 transition"
              >
                Browse node builds
              </Link>
              <a
                href={QUOTED_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-neutral-200 underline underline-offset-4 hover:text-white"
              >
                View full catalog on Quoted →
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/5 p-4 md:p-6">
            <span className="text-xs uppercase tracking-[0.18em] text-neutral-300">
              Chains supported
            </span>
            <div className="flex items-center gap-4">
              <ChainLogo chain="polkadot" size={50} />
              <ChainLogo chain="ethereum" size={50} />
              <ChainLogo chain="solana" size={50} />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-black/60 p-5 text-sm text-neutral-200 backdrop-blur-md">
          <h2 className="text-base font-semibold text-white">
            Local sovereignty
          </h2>
          <p className="mt-2">
            Run your own node, own your history, and stop relying on rented
            RPC endpoints.
          </p>
        </div>
        <div className="rounded-2xl bg-black/60 p-5 text-sm text-neutral-200 backdrop-blur-md">
          <h2 className="text-base font-semibold text-white">Quiet power</h2>
          <p className="mt-2">
            Carefully selected components for 24/7 uptime, low noise, and
            stable thermals.
          </p>
        </div>
        <div className="rounded-2xl bg-black/60 p-5 text-sm text-neutral-200 backdrop-blur-md">
          <h2 className="text-base font-semibold text-white">
            Custom cosmetics
          </h2>
          <p className="mt-2">
            Chain branding, neon accents, or your own artwork—Quoted can
            print and mount your design.
          </p>
        </div>
      </section>
    </div>
  );
}
