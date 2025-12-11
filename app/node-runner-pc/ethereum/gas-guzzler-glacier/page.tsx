// app/node-runner-pc/ethereum/gas-guzzler-glacier/page.tsx
import { ChainLogo } from "@/components/ChainLogo";
import Link from "next/link";

const QUOTED_URL =
  "https://quoted.tech/?utm_source=x&utm_medium=post&utm_campaign=polkadot";

export default function GasGuzzlerGlacierPage() {
  return (
    <div className="space-y-6 rounded-3xl bg-black/70 p-8 shadow-xl shadow-black/40 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Gas Guzzler Glacier
          </h1>
          <p className="mt-2 text-sm text-neutral-200">
            Base Ethereum node rig for running execution + consensus clients
            with room for everyday tooling.
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
            <li>• CPU: 8-core / 16-thread Ryzen 7 or Intel i7</li>
            <li>• RAM: 32 GB DDR4/DDR5</li>
            <li>• Storage: 1 TB NVMe SSD (OS + clients)</li>
            <li>• Extra Storage: 2 TB NVMe SSD for chain data</li>
            <li>• Network: 1–2.5 Gbps Ethernet</li>
            <li>• PSU: 650W 80+ Gold</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
            Use cases & cosmetics
          </h2>
          <p className="mt-3 text-sm text-neutral-200">
            Great for solo-staking, testnet work, or keeping your own mainnet
            view with Lighthouse, Prysm, Geth, or Nethermind.
          </p>
          <p className="mt-3 text-sm text-neutral-200">
            Optional minimalist Ethereum glyph on the panel or frosted-glass
            effect with subtle purple lighting.
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
