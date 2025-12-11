import fs from "fs";
import path from "path";

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

type BuildWithChain = Build & { chainId: string };

function getAllBuilds(): BuildWithChain[] {
  const filePath = path.join(process.cwd(), "mock-data", "builds.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(raw) as Record<string, Build[]>;
  const result: BuildWithChain[] = [];

  for (const chainId of Object.keys(data)) {
    const builds = data[chainId] || [];
    builds.forEach((b) => result.push({ ...b, chainId }));
  }

  return result;
}

function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency
  }).format(cents / 100);
}

function getCosmeticOptions(chainId: string) {
  if (chainId === "ethereum") {
    return [
      {
        id: "eth-midnight",
        name: "Midnight Ether",
        desc: "Matte black case, deep blue Ethereum diamonds, subtle front glow."
      },
      {
        id: "eth-prism",
        name: "Shard Prism",
        desc: "Frosted white with holographic triangles and a clean Eth logo badge."
      },
      {
        id: "eth-rollup-racer",
        name: "Rollup Racer",
        desc: "Silver metallic shell, purple racing stripe with tiny Eth icons."
      }
    ];
  }

  if (chainId === "polkadot") {
    return [
      {
        id: "dot-confetti",
        name: "Polkadot Confetti",
        desc: "Gloss white with pink and teal dots, Polkadot glyph floating on the glass."
      },
      {
        id: "dot-terminal",
        name: "Relay Terminal",
        desc: "Charcoal case with pink accent bar, subtle relay-chain lines down the side."
      },
      {
        id: "dot-orbit",
        name: "Orbit Parade",
        desc: "Black shell, glowing rings like parachains orbiting the main logo."
      }
    ];
  }

  if (chainId === "solana") {
    return [
      {
        id: "sol-aurora",
        name: "Aurora Beam",
        desc: "Smoked glass with teal to purple light bar, Solana stripes across the front."
      },
      {
        id: "sol-jet",
        name: "Jetstream Mesh",
        desc: "High airflow mesh, neon green fans, tiny Solana bars near the ports."
      },
      {
        id: "sol-nightdrive",
        name: "Nightdrive Neon",
        desc: "Matte black, RGB underglow tuned to Solana gradient tones."
      }
    ];
  }

  return [
    {
      id: "default-clean",
      name: "Clean minimal",
      desc: "Simple monochrome shell, small tasteful logo badge on the front."
    }
  ];
}

export default function CustomizePage({
  params
}: {
  params: { buildId: string };
}) {
  const allBuilds = getAllBuilds();
  const build = allBuilds.find((b) => b.id === params.buildId);

  if (!build) {
    return (
      <div className="min-h-screen text-white py-6">
        <p className="text-sm text-zinc-400">Build not found.</p>
      </div>
    );
  }

  const cosmeticOptions = getCosmeticOptions(build.chainId);

  return (
    <div className="min-h-screen text-white py-6 space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          Step 2 · Case cosmetics
        </p>
        <h1 className="text-2xl font-semibold">{build.name}</h1>
        <p className="text-sm text-zinc-300 max-w-2xl">
          {build.variant} · {formatPrice(build.estPriceCents, build.currency)}
        </p>
        <p className="text-[11px] text-zinc-400 max-w-xl">
          Hardware picked. Now choose the outer skin. These options represent
          how your tower would be painted, lit and branded for this network.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-[3fr,2fr] items-start">
        {/* Cosmetic options */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold mb-1">Select a case style</h2>
          <p className="text-[11px] text-zinc-400 mb-2">
            These are conceptual designs. In a full product, you would see real
            renders and pricing per finish.
          </p>

          <div className="space-y-3">
            {cosmeticOptions.map((opt) => (
              <div
                key={opt.id}
                className="border border-zinc-800 bg-zinc-950/80 rounded-xl p-3"
              >
                <p className="text-xs font-semibold mb-1">{opt.name}</p>
                <p className="text-[11px] text-zinc-300">{opt.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 border border-dashed border-zinc-700 rounded-xl p-3">
            <p className="text-xs font-semibold mb-1">
              Use your own artwork (coming soon)
            </p>
            <p className="text-[11px] text-zinc-400">
              Later, you could upload your own logo, team crest or artist collab
              graphics and have Quoted print or etch it onto the case.
            </p>
          </div>
        </div>

        {/* Preview / summary */}
        <div className="border border-zinc-800 rounded-2xl bg-zinc-950/80 p-5 space-y-4">
          <div className="relative h-40 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/80 mb-3">
            <div className="absolute -inset-10 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 opacity-40 blur-3xl" />
            <div className="relative h-full flex items-center justify-center text-xs text-zinc-200">
              Case preview mockup
              <br />
              (art goes here)
            </div>
          </div>
          <div className="space-y-1 text-[11px] text-zinc-400">
            <p>
              <span className="text-zinc-200">Chain:</span> {build.chainId}
            </p>
            <p>
              <span className="text-zinc-200">Artwork mood:</span>{" "}
              {build.artworkTheme}
            </p>
          </div>
          <a
            href={build.quotedDeepLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-xs font-medium text-white text-center"
          >
            Lock in hardware on Quoted →
          </a>
        </div>
      </section>
    </div>
  );
}
