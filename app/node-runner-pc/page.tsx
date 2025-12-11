// app/node-runner-pc/page.tsx
import { BuildCard } from "@/components/BuildCard";
import { ChainLogo } from "@/components/ChainLogo";

export default function NodeRunnerPcPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-black/60 p-8 shadow-xl shadow-black/40 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Choose your chain. Choose your RiFF RAFF rig.
            </h1>
            <p className="mt-2 max-w-xl text-sm text-neutral-200">
              Each build is named in true RiFF RAFF spirit—loud, playful,
              and over-specced. Under the hood: legit hardware tuned for
              real node workloads.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ChainLogo chain="polkadot" size={48} />
            <ChainLogo chain="ethereum" size={48} />
            <ChainLogo chain="solana" size={48} />
          </div>
        </div>
      </section>

      {/* Polkadot builds */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-300">
          Polkadot builds
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <BuildCard
            chain="polkadot"
            title="Neon Relay Ranch"
            slug="/node-runner-pc/polkadot/neon-relay-ranch"
            description="Base Polkadot validator rig—quiet, efficient, and ready for relay chain rodeos."
            tier="Base"
          />
          <BuildCard
            chain="polkadot"
            title="Versace Validator"
            slug="/node-runner-pc/polkadot/versace-validator"
            description="Upgraded RAM, storage, and thermals for whales who never sleep."
            tier="Upgraded"
          />
        </div>
      </section>

      {/* Ethereum builds */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-300">
          Ethereum builds
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <BuildCard
            chain="ethereum"
            title="Gas Guzzler Glacier"
            slug="/node-runner-pc/ethereum/gas-guzzler-glacier"
            description="Chilled-out execution + consensus box built for steady mainnet cruising."
            tier="Base"
          />
          <BuildCard
            chain="ethereum"
            title="Merkle Mansion"
            slug="/node-runner-pc/ethereum/merkle-mansion"
            description="Extra cores, extra NVMe, extra everything for your personal rollup empire."
            tier="Upgraded"
          />
        </div>
      </section>

      {/* Solana builds */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-300">
          Solana builds
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <BuildCard
            chain="solana"
            title="Turbo Lagoon"
            slug="/node-runner-pc/solana/turbo-lagoon"
            description="Meets recommended validator specs with a little extra juice in the tank."
            tier="Base"
          />
          <BuildCard
            chain="solana"
            title="Laser Lemon Lambo"
            slug="/node-runner-pc/solana/laser-lemon-lambo"
            description="Full-send Solana box: maxed CPU, RAM, and I/O for degen-level throughput."
            tier="Upgraded"
          />
        </div>
      </section>
    </div>
  );
}
