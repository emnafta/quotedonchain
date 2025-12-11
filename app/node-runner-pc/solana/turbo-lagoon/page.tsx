// app/node-runner-pc/solana/turbo-lagoon/page.tsx
import { ChainLogo } from "@/components/ChainLogo";
import Link from "next/link";

const QUOTED_URL =
  "https://quoted.tech/?utm_source=x&utm_medium=post&utm_campaign=polkadot";

export default function TurboLagoonPage() {
  return (
    <div className="space-y-6 rounded-3xl bg-black/70 p-8 shadow-xl shadow-black/40 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Turbo Lagoon</h1>
          <p className="mt-2 text-sm text-neutral-200">
            Base Solana validator spec, tuned for throughput without going
            completely overboard.
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
            <li>• CPU: 12-core / 24-thread modern Ryzen or Intel</li>
            <li>• RAM: 64 GB DDR4/DDR5</li>
            <li>• Storage: 1 TB NVMe (OS)</li>
            <li>• Extra Storage: 2 TB NVMe (ledger data)</li>
            <li>• GPU: Modest GPU (e.g. RTX 3060) for quality output</li>
            <li>• PSU: 850W 80+ Gold</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
            Use cases & cosmetics
          </h2>
          <p className="mt-3 text-sm text-neutral-200">
            Good starting validator box for mainnet or serious testnet work,
            with enough headroom for upgrades later.
          </p>
          <p className="mt-3 text-sm text-neutral-200">
            Gradient Solana bars on the glass, teal–purple lighting, or your
            own lagoon-themed artwork mounted by Quoted Tech.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm">
        <Link
          href="/node-runner-pc"
          className="rounded-full bg-white px-4 py-1.5 font-medium text_black hover:bg-neutral-200 transition"
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
