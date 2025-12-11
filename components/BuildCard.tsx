// components/BuildCard.tsx
"use client";

import Link from "next/link";
import { Chain, ChainLogo } from "./ChainLogo";

interface BuildCardProps {
  chain: Chain;
  title: string;
  slug: string;
  description?: string;
  previewVideo?: string;
  tier?: "Base" | "Upgraded";
}

const QUOTED_URL =
  "https://quoted.tech/?utm_source=x&utm_medium=post&utm_campaign=polkadot";

export function BuildCard({
  chain,
  title,
  slug,
  description,
  tier,
  previewVideo,    // <-- IMPORTANT
}: BuildCardProps) {
  return (
    <div className="relative group rounded-3xl border border-white/10 bg-black/40 p-5 shadow-lg shadow-black/40 backdrop-blur-md overflow-hidden">
      
      {/* CARD CONTENT */}
      <div className="flex items-center gap-4 relative z-20">
        <ChainLogo chain={chain} size={56} />
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {tier && (
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-200">
                {tier}
              </span>
            )}
          </div>
          {description && (
            <p className="mt-1 text-sm text-neutral-300">{description}</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 text-xs relative z-20">
        <Link
          href={slug}
          className="rounded-full bg-white text-black px-4 py-1.5 font-medium hover:bg-neutral-200 transition"
        >
          View specs
        </Link>

        <a
          href={QUOTED_URL}
          target="_blank"
          rel="noreferrer"
          className="text-neutral-300 hover:text-white underline underline-offset-4"
        >
          View on Quoted →
        </a>
      </div>

      {/* HOVER VIDEO LAYER */}
      {previewVideo && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={previewVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}
    </div>
  );
}
