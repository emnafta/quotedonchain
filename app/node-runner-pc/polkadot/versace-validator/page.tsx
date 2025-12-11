// app/node-runner-pc/polkadot/neon-relay-ranch/page.tsx
import { ChainLogo } from "@/components/ChainLogo";
import Link from "next/link";

const QUOTED_URL =
  "https://quoted.tech/?utm_source=x&utm_medium=post&utm_campaign=polkadot";

export default function NeonRelayRanchPage() {
  return (
    <div className="space-y-6 rounded-3xl bg-black/70 p-8 shadow-xl shadow-black/40 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Neon Relay Ranch
          </h1>
          <p className="mt-2 text-sm text-neutral-200">
            Base Polkadot validator / full node build. Quiet, efficient, and
            tuned for relay chain + parachain workloads.
          </p>
        </div>
        <ChainLogo chain="polkadot" size={56} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
            Estimated specs
          </h2>
          <ul className="mt-3 space-y-1 text-sm text-neutral-200">
            <li>• CPU: 8-core / 16-thread Ryzen 7 or Intel i7</li>
            <li>• RAM: 32 GB DDR4/DDR5</li>
            <li>• Storage: 2 TB NVMe SSD (Gen4 preferred)</li>
            <li>• Network: 2.5 Gbps Ethernet-capable motherboard</li>
            <li>• PSU: 650W 80+ Gold</li>
            <li>• Case: Silent mid-tower with strong airflow</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
            Use cases & cosmetics
          </h2>
          <p className="mt-3 text-sm text-neutral-200">
            Ideal for long-term staking, monitoring, and running extra Polkadot
            tools alongside your node without breaking a sweat.
          </p>
          <p className="mt-3 text-sm text-neutral-200">
            Optional Polkadot ring branding on the side panel or your own
            artwork printed and mounted by Quoted Tech.
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
