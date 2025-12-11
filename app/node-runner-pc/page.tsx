// app/node-runner-pc/page.tsx
import { ChainLogo } from "@/components/ChainLogo";
import { BuildCard } from "@/components/BuildCard";

export default function NodeRunnerPcPage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-3xl bg-black/60 p-8 shadow-xl shadow-black/40 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Choose your chain. Choose your RiFF RAFF rig.
            </h1>
            <p className="mt-2 max-w-xl text-sm text-neutral-200">
              Loud names, minimal builds. Each rig is specced for real node
              workloads on Polkadot, Ethereum, or Solana—designed to look clean
              in any studio or office.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ChainLogo chain="polkadot" size={48} />
            <ChainLogo chain="ethereum" size={48} />
            <ChainLogo chain="solana" size={48} />
          </div>
        </div>
      </section>

      {/* POLKADOT */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
          Polkadot builds
        </h2>
        <p className="text-sm text-neutral-200">
          Quiet, efficient rigs tuned for Polkadot validators, parachain
          collators, and full nodes. Built to sit in your home or studio
          without sounding like a datacenter.
        </p>

        {/* Cards (descriptions ABOVE video) */}
        <div className="grid gap-6 md:grid-cols-2">
<BuildCard
  chain="polkadot"
  title="Neon Relay Ranch"
  slug="/node-runner-pc/polkadot/neon-relay-ranch"
  description="Base Polkadot validator rig—quiet, efficient, and ready for relay chain + parachain workloads."
  tier="Base"
  previewVideo="/video/polkadot-sample.mp4"   // 👈 ADD THIS
/>

<BuildCard
  chain="polkadot"
  title="Versace Validator"
  slug="/node-runner-pc/polkadot/versace-validator"
  description="Upgraded RAM, storage, and thermals for whales who never sleep and nodes that can’t go down."
  tier="Upgraded"
  previewVideo="/video/polkadot-sample.mp4"   // 👈 ADD THIS
/>

        </div>

        {/* Polkadot sample video BELOW cards */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_12px_rgba(255,46,168,0.25)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/video/polkadot-sample.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ETHEREUM */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
          Ethereum builds
        </h2>
        <p className="text-sm text-neutral-200">
          Balanced boxes for running execution + consensus clients, local RPC
          endpoints, and validator setups with sane thermals and uptime.
        </p>

        {/* Cards (descriptions ABOVE video) */}
        <div className="grid gap-6 md:grid-cols-2">
<BuildCard
  chain="ethereum"
  title="Gas Guzzler Glacier"
  slug="/node-runner-pc/ethereum/gas-guzzler-glacier"
  description="Steady execution + consensus performance with room for extra services on the side."
  tier="Base"
  previewVideo="/video/ethereum-sample.mp4"   // 👈 ADD THIS
/>

<BuildCard
  chain="ethereum"
  title="Merkle Mansion"
  slug="/node-runner-pc/ethereum/merkle-mansion"
  description="Extra cores, extra NVMe, extra everything for your personal rollup empire and infra stack."
  tier="Upgraded"
  previewVideo="/video/ethereum-sample.mp4"   // 👈 ADD THIS
/>
        </div>

        {/* Ethereum sample video BELOW cards */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_12px_rgba(128,0,255,0.25)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/video/ethereum-sample.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* SOLANA */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
          Solana builds
        </h2>
        <p className="text-sm text-neutral-200">
          High-throughput rigs for Solana RPC nodes, indexers, and
          validator-class performance—tuned for fast disks and serious RAM.
        </p>

        {/* Cards (descriptions ABOVE video) */}
        <div className="grid gap-6 md:grid-cols-2">
<BuildCard
  chain="solana"
  title="Turbo Lagoon"
  slug="/node-runner-pc/solana/turbo-lagoon"
  description="Entry Solana node box with fast NVMe and enough RAM for serious RPC work."
  tier="Base"
  previewVideo="/video/solana-sample.mp4"   // 👈 ADD THIS
/>

<BuildCard
  chain="solana"
  title="Hyperion Halo"
  slug="/node-runner-pc/solana/hyperion-halo"
  description="Upgraded Solana rig for validators and power users."
  tier="Upgraded"
  previewVideo="/video/solana-sample.mp4"   // 👈 ADD THIS
/>
        </div>

        {/* Solana sample video BELOW cards */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_12px_rgba(0,255,255,0.25)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/video/solana-sample.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
