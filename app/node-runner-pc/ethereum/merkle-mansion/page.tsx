// app/node-runner-pc/ethereum/merkle-mansion/page.tsx
import { ChainLogo } from "@/components/ChainLogo";
import Link from "next/link";

const QUOTED_URL =
  "https://quoted.tech/?utm_source=x&utm_medium=post&utm_campaign=polkadot";

export default function MerkleMansionPage() {
  return (
    <div className="space-y-6 rounded-3xl bg-black/70 p-8 shadow-xl shadow-black/40 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Merkle Mansion
          </h1>
          <p className="mt-2 text-sm text-neutral-200">
            Upgraded Ethereum box for power users: extra cores, RAM, and storage
            for heavy client setups and archival data.
          </p>
        </div>
        <ChainLogo chain="ethereum" size={56} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
            Estimated specs
          </h2>
          <ul className="mt-3 space-y-1 text-sm text-neutral-200">
            <li>• CPU: 12–16 core Ryzen 9 / Intel i9</li>
            <li>• RAM: 64 GB DDR4/DDR5</li>
            <li>• Storage: 1 TB NVMe (OS + tools)</li>
            <li>• Extra Storage: 2 × 2 TB NVMe (execution + consensus data)</li>
            <li>• Optional: 8–12 GB GPU for zk or research workloads</li>
            <li>• PSU: 850W 80+ Gold</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
            Use cases & cosmetics
          </h2>
          <p className="mt-3 text-sm text-neutral-200">
            For operators who want to experiment with archive modes, rollup
            nodes, and extra infra on the same machine.
          </p>
          <p className="mt-3 text-sm text-neutral-200">
            Matte-black case with mirrored Ethereum shard motif, or fully
            customized art coordinated with Quoted Tech.
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
