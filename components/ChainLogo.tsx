// components/ChainLogo.tsx
"use client";

import Image from "next/image";

export type Chain = "solana" | "ethereum" | "polkadot";

const chainConfig: Record<
  Chain,
  { src: string; alt: string; label: string }
> = {
  solana: {
    src: "/logos/solana.png",
    alt: "Solana logo",
    label: "Solana",
  },
  ethereum: {
    src: "/logos/ethereum.png",
    alt: "Ethereum logo",
    label: "Ethereum",
  },
  polkadot: {
    src: "/logos/polkadot.png",
    alt: "Polkadot logo",
    label: "Polkadot",
  },
};

interface ChainLogoProps {
  chain: Chain;
  size?: number;
  showLabel?: boolean;
}

export function ChainLogo({
  chain,
  size = 80,
  showLabel = false,
}: ChainLogoProps) {
  const cfg = chainConfig[chain];

  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={cfg.src}
        alt={cfg.alt}
        width={size}
        height={size}
        className="rounded-2xl"
        priority
      />
      {showLabel && (
        <span className="text-sm font-medium text-neutral-100">
          {cfg.label}
        </span>
      )}
    </div>
  );
}
