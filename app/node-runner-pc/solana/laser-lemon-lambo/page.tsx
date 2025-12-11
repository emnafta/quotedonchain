// app/node-runner-pc/solana/laser-lemon-lambo/page.tsx
import { ChainLogo } from "@/components/ChainLogo";
import Link from "next/link";

const QUOTED_URL =
  "https://quoted.tech/?utm_source=x&utm_medium=post&utm_campaign=polkadot";

export default function LaserLemonLamboPage() {
  return (
    <div className="space-y-6 rounded-3xl bg-black/70 p-8 shadow-xl shadow-black/40 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text_white">
            Laser Lemon Lambo
          </h1>
          <p className="mt-2 text-sm text-neutral-200">
            Full-send Solana validator: maxed-out CPU, RAM, and storage for
            degens who never sleep.
          </p>
        </div>
        <ChainLogo chain="solana" size={56} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
            Estimated specs
          </h2>
          <ul className="mt-3 space-y-1 text-sm text-neutral-200">
            <li>• CPU: 16-core / 32-thread high-end Ryzen or Intel</li>
            <li>• RAM: 128 GB DDR4/DDR5</li>
            <li>• Storage: 2 × 2 TB Gen4 NVMe SSD (ledger + snapshots)</li>
            <li>• Extra: Optional separate 1 TB NVMe for logs & tooling</li>
            <li>• GPU: Strong GPU (e.g. RTX 4070+) for extra workloads</li>
            <li>• PSU: 1000W 80+ Gold or Platinum</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
            Use cases & cosmetics
          </h2>
          <p className="mt-3 text-sm text-neutral-200">
            For heavy Solana mainnet validators, RPC providers, and infra
            operators who want insane throughput and low latency.
          </p>
          <p className="mt-3 text-sm text-neutral-200">
            Neon yellow accents, underglow, and Solana gradients across the
            side panel—or your own Lambo-themed wrap applied by Quoted Tech.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm">
        <Link
          href="/node-runner-pc"
          className="rounded-full bg-white px-4 py-1.5 font-medium text-black hover:bg-neutral-200 transition"
        >
          ← Back to builds
        </Link>
        <a
          href={QUOTED_URL}
          target="_blank"
          rel="noreferrer"
          className="text-neutral-200 underline underline-offset-4 hover:text-white"
        >
          Build this on Quoted →
        </a>
      </div>
    </div>
  );
}
