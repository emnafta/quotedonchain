import fs from "fs";
import path from "path";
import Link from "next/link";

type Build = {
  id: string;
  name: string;
  variant: string;
  estPriceCents: number;
  currency: string;
  tags: string[];
  artworkTheme: string;
  quotedDeepLink: string;
};

type ChainConfig = {
  id: "polkadot" | "ethereum" | "solana";
  name: string;
  subtitle: string;
  accentClass: string;
  artworkGlowClass: string;
};

const chains: ChainConfig[] = [
  {
    id: "polkadot",
    name: "Polkadot",
    subtitle: "Relay-chain validators & full nodes",
    accentClass: "text-pink-400",
    artworkGlowClass: "from-pink-500 via-purple-500 to-sky-500"
  },
  {
    id: "ethereum",
    name: "Ethereum",
    subtitle: "Staking validators & MEV-ready rigs",
    accentClass: "text-emerald-400",
    artworkGlowClass: "from-emerald-400 via-cyan-400 to-slate-300"
  },
  {
    id: "solana",
    name: "Solana",
    subtitle: "High IOPS validators & RPC boxes",
    accentClass: "text-sky-400",
    artworkGlowClass: "from-sky-400 via-violet-500 to-fuchsia-500"
  }
];

function getAllBuilds(): Record<string, Build[]> {
  const filePath = path.join(process.cwd(), "mock-data", "builds.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(raw);
  return data as Record<string, Build[]>;
}

function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency
  }).format(cents / 100);
}

export default function NodesPage() {
  const allBuilds = getAllBuilds();

  return (
    <div className="min-h-screen text-white py-6">
      <div className="space-y-8">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            Multi-chain catalogue
          </p>
          <h1 className="text-3xl font-semibold">Node & Validator Builds</h1>
          <p className="text-sm text-zinc-300 max-w-2xl">
            Pick a network and start from a curated hardware profile. Each card
            shows two riffed-out builds plus a visual mood for how the tower
            could look on your desk.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {chains.map((chain) => {
            const buildsForChain = allBuilds[chain.id] || [];
            const firstTwo = buildsForChain.slice(0, 2);

            return (
              <div
                key={chain.id}
                className="border border-zinc-800 bg-zinc-950/80 rounded-2xl p-5 flex flex-col gap-4"
              >
                {/* Chain header */}
                <div>
                  <p
                    className={`text-[11px] uppercase tracking-[0.2em] mb-1 ${chain.accentClass}`}
                  >
                    {chain.name}
                  </p>
                  <h2 className="text-sm font-semibold mb-1">
                    {chain.subtitle}
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Two signature builds, both loud in spec and louder in style.
                  </p>
                </div>

                {/* Artwork / preview space */}
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/80 h-32 mb-1">
                  <div
                    className={`absolute -inset-10 bg-gradient-to-r ${chain.artworkGlowClass} opacity-40 blur-3xl`}
                  />
                  <div className="relative h-full flex items-center justify-between px-4">
                    <div className="space-y-1 text-xs">
                      <p className="text-zinc-200">Case artwork mood</p>
                      <p className="text-[11px] text-zinc-300 max-w-[12rem]">
                        {firstTwo[0]?.artworkTheme ??
                          "Define artworkTheme in builds.json"}
                      </p>
                    </div>
                    <div className="h-16 w-16 rounded-xl border border-zinc-700 bg-black/60 flex items-center justify-center text-[10px] text-zinc-300">
                      Preview
                      <br />
                      art slot
                    </div>
                  </div>
                </div>

                {/* Builds list */}
                <div className="space-y-3">
                  {firstTwo.map((b) => (
                    <div
                      key={b.id}
                      className="border border-zinc-800 rounded-xl px-3 py-2 bg-zinc-900/70"
                    >
                      <p className="text-xs font-semibold">{b.name}</p>
                      <p className="text-[11px] text-zinc-400 mb-1">
                        {b.variant} · {formatPrice(b.estPriceCents, b.currency)}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {b.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-[2px] rounded-full border border-zinc-700 text-[10px] text-zinc-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <a
                          href={b.quotedDeepLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-pink-400 hover:text-pink-300"
                        >
                          View on Quoted →
                        </a>
                        <Link
                          href={`/customize/${b.id}`}
                          className="text-zinc-300 hover:text-white"
                        >
                          Customize case →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
