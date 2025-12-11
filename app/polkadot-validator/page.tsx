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

const requirements = {
  cpu: "8 physical cores @ ~3.4 GHz+ (Zen3 / Ice Lake or newer, SMT off preferred)",
  ram: "32 GB RAM (ECC recommended for production ops)",
  storage: "2 TB NVMe SSD (Gen3 or Gen4, low latency)",
  network: "500 Mbit/s symmetric connection (wired ethernet)"
};

function getBuilds(): Build[] {
  const filePath = path.join(process.cwd(), "mock-data", "builds.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(raw);
  return (data["polkadot"] as Build[]) || [];
}

function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency
  }).format(cents / 100);
}

export default function PolkadotValidatorPage() {
  const builds = getBuilds();

  return (
    <div className="min-h-screen text-white py-6">
      <div className="space-y-8">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            Profile • Polkadot
          </p>
          <h1 className="text-3xl font-semibold">Polkadot Validator Node Builds</h1>
          <p className="text-sm text-zinc-300 max-w-2xl">
            These builds hit the recommended hardware for Polkadot validators,
            but with a bit more personality. Specs are examples and prices are
            sample numbers; in production this would stream live from Quoted Tech.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[2fr,3fr] items-start">
          {/* Requirements card */}
          <div className="border border-zinc-800 bg-zinc-950/70 rounded-2xl p-5 space-y-3">
            <h2 className="text-sm font-semibold mb-1">
              Recommended baseline requirements
            </h2>
            <ul className="text-xs text-zinc-300 space-y-2">
              <li>
                <span className="text-pink-400">CPU:</span> {requirements.cpu}
              </li>
              <li>
                <span className="text-pink-400">RAM:</span> {requirements.ram}
              </li>
              <li>
                <span className="text-pink-400">Storage:</span> {requirements.storage}
              </li>
              <li>
                <span className="text-pink-400">Network:</span> {requirements.network}
              </li>
            </ul>
            <p className="text-[11px] text-zinc-500 mt-3">
              Always run validators on stable power and wired internet. Consider a
              UPS and monitoring stack for uptime.
            </p>
          </div>

          {/* Builds list */}
          <div className="grid gap-4 md:grid-cols-2">
            {builds.map((b) => (
              <article
                key={b.id}
                className="border border-zinc-800 bg-zinc-900/60 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 mb-1">
                    Meets validator baseline
                  </p>
                  <h2 className="text-base font-semibold mb-1">{b.name}</h2>
                  <p className="text-[11px] text-zinc-400 mb-2">{b.variant}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {b.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full border border-zinc-700 text-[11px] text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-zinc-400 mb-1">
                    Estimated price (example):
                  </div>
                  <div className="text-xl font-bold mb-2">
                    {formatPrice(b.estPriceCents, b.currency)}
                  </div>

                  <p className="text-[11px] text-zinc-400">
                    Case mood: {b.artworkTheme}
                  </p>
                </div>

                <a
                  href={b.quotedDeepLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-xs font-medium text-white text-center"
                >
                  Configure on Quoted Tech →
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
