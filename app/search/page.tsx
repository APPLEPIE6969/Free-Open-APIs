"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";
import Link from "next/link";
import { categories, API } from "@/app/data/apis";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<API[]>([]);

  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      const filtered = categories.flatMap(cat => cat.apis).filter(api =>
        api.name.toLowerCase().includes(lowerQuery) ||
        api.description.toLowerCase().includes(lowerQuery)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto animate-slide-up">
      <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20 -mx-4 md:-mx-8 mb-4 md:mb-8">
        <div className="flex-1 max-w-xl relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </span>
          <input
            className="w-full bg-surface-dark border border-surface-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-zinc-500 focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-sm"
            placeholder="Search for 'Weather', 'Crypto', 'Cats'..."
            type="text"
            defaultValue={query}
            onChange={(e) => {
              const params = new URLSearchParams(window.location.search);
              if (e.target.value) {
                params.set("q", e.target.value);
              } else {
                params.delete("q");
              }
              window.history.replaceState(null, '', `?${params.toString()}`);

              const lowerQuery = e.target.value.toLowerCase();
              const filtered = categories.flatMap(cat => cat.apis).filter(api =>
                api.name.toLowerCase().includes(lowerQuery) ||
                api.description.toLowerCase().includes(lowerQuery)
              );
              setResults(filtered);
            }}
          />
        </div>
      </header>

      <h1 className="text-2xl font-bold mb-6 px-2">
        {query ? `Search Results for "${query}"` : "Search APIs"}
      </h1>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
          {results.map((api, idx) => {
            const apiSlug = api.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
            return (
              <Link
                key={idx}
                href={`/api/${apiSlug}`}
                className="bg-surface-dark rounded-xl border border-surface-border p-5 hover:border-primary/60 transition-all group h-full flex flex-col relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex gap-2 flex-wrap">
                    {(api.tags || []).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] font-medium px-2 py-1 rounded border ${
                          tag === "No Auth"
                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                            : tag === "API Key"
                            ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                            : "bg-black text-zinc-300 border-surface-border"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-2 relative z-10">
                  {api.name}
                  <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">arrow_forward</span>
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-3 flex-grow relative z-10">
                  {api.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-zinc-500 text-center py-20">
          <span className="material-symbols-outlined text-6xl mb-4 opacity-50">search_off</span>
          <p>No results found. Try a different term.</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-display">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide hero-gradient pb-32 md:pb-8">
          <Suspense fallback={<div className="p-8 text-center text-zinc-500">Loading search...</div>}>
            <SearchContent />
          </Suspense>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
