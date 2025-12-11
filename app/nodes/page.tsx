// app/nodes/page.tsx
"use client";

import { useMemo, useState } from "react";
import { homeNodeChains } from "@/mock-data/homeNodeChains";

type SortOption = "name" | "apr" | "hardware";

export default function NodesPage() {
  const [search, setSearch] = useState("");
  const [onlyHomeValidators, setOnlyHomeValidators] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("name");

  const filteredChains = useMemo(() => {
    return homeNodeChains
      .filter((chain) => {
        if (onlyHomeValidators && chain.validatorHomeFeasible !== "yes") {
          return false;
        }
        if (!search.trim()) return true;

        const q = search.toLowerCase();
        return (
          chain.name.toLowerCase().includes(q) ||
          chain.category.toLowerCase().includes(q) ||
          chain.notes.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === "apr") {
          return b.aprSort - a.aprSort;
        }
        if (sortBy === "hardware") {
          return a.hardwareScore - b.hardwareScore;
        }
        return 0;
      });
  }, [search, onlyHomeValidators, sortBy]);

  return (
    <div className="space-y-8">
      {/* Hero / intro */}
      <section className="rounded-3xl bg-black/60 p-8 shadow-xl shadow-black/40 backdrop-blur-md">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Node Compatibility Matrix
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-neutral-200">
          Compare 25 major networks that can be run from home—either as full
          nodes or validators. Use this matrix to match a Quoted On-chain rig
          to the chains you care about: Polkadot, Ethereum, Solana, Cosmos, and
          more.
        </p>
      </section>

      {/* Controls */}
      <section className="rounded-3xl bg-black/60 p-4 shadow-lg shadow-black/40 backdrop-blur-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-2">
            <label className="w-full text-xs text-neutral-300">
              <span className="mb-1 block font-semibold uppercase tracking-[0.18em]">
                Search chains
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Polkadot, Solana, Cosmos, DePIN..."
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-neutral-500 focus:border-white/40"
              />
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-neutral-200">
              <input
                type="checkbox"
                checked={onlyHomeValidators}
                onChange={(e) => setOnlyHomeValidators(e.target.checked)}
                className="h-3 w-3 rounded border border-neutral-500 bg-black/40"
              />
              <span>Show only home-feasible validators</span>
            </label>

            <label className="flex items-center gap-2 text-xs text-neutral-200">
              <span className="uppercase tracking-[0.18em] text-neutral-400">
                Sort
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-xl border border-white/10 bg-black/40 px-2 py-1 text-xs text-white outline-none"
              >
                <option value="name">Alphabetical</option>
                <option value="apr">Earning potential (APR)</option>
                <option value="hardware">Hardware light → heavy</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="overflow-hidden rounded-3xl bg-black/60 shadow-xl shadow-black/40 backdrop-blur-md">
        <div className="max-h-[70vh] overflow-auto">
          <table className="min-w-full text-left text-sm text-neutral-100">
            <thead className="sticky top-0 bg-black/80 text-xs uppercase tracking-[0.16em] text-neutral-400 backdrop-blur">
              <tr>
                <th className="px-4 py-3">Chain</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Stake (Validator)</th>
                <th className="px-4 py-3">Hardware</th>
                <th className="px-4 py-3">Home Node</th>
                <th className="px-4 py-3">Home Validator</th>
                <th className="px-4 py-3">Est. Earning Potential</th>
              </tr>
            </thead>
            <tbody>
              {filteredChains.map((chain) => (
                <tr
                  key={chain.id}
                  className="border-t border-white/5 bg-black/30 hover:bg-white/5"
                >
                  <td className="px-4 py-3 font-medium text-white">
                    {chain.name}
                  </td>
                  <td className="px-4 py-3 text-xs text-neutral-300">
                    {chain.category}
                  </td>
                  <td className="px-4 py-3 text-xs text-neutral-200">
                    {chain.stakeRequirement}
                  </td>
                  <td className="px-4 py-3 text-xs text-neutral-200">
                    {chain.hardwareSummary}
                  </td>
                  <td className="px-4 py-3 text-xs">
                    {chain.homeNodeFeasible ? (
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-300">
                        Yes
                      </span>
                    ) : (
                      <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-red-300">
                        No
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs">
                    {chain.validatorHomeFeasible === "yes" && (
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-300">
                        Yes
                      </span>
                    )}
                    {chain.validatorHomeFeasible === "partial" && (
                      <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-amber-300">
                        Partial
                      </span>
                    )}
                    {chain.validatorHomeFeasible === "no" && (
                      <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-red-300">
                        No
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs text-neutral-100">
                    {chain.aprRange}
                    <span className="ml-1 text-[0.7rem] text-neutral-400">
                      est., not guaranteed
                    </span>
                    <div className="mt-1 text-[0.7rem] text-neutral-500">
                      {chain.notes}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredChains.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-8 text-center text-xs text-neutral-400"
                  >
                    No chains match your filters yet. Try clearing the search or
                    turning off the validator filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
