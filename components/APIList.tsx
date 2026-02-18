"use client";

import { categories } from "@/app/data/apis";
import { generateSlug } from "@/app/data/utils";
import Link from "next/link";

export default function APIList() {
  return (
    <div className="space-y-16 mt-16 px-6 md:px-8">
      {categories.map((category) => {
        const categorySlug = generateSlug(category.name);
        return (
          <div
            key={category.name}
            id={categorySlug}
            className="scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-surface-border pb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">{category.icon}</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{category.name}</h2>
              <span className="text-xs font-semibold text-zinc-500 bg-surface-dark border border-surface-border px-2.5 py-1 rounded-full">
                {category.apis.length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.apis.map((api, idx) => {
                const apiSlug = generateSlug(api.name);
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
                      {api.status === "Online" && (
                        <div className="flex items-center gap-1.5 text-xs text-primary/80 ml-auto bg-black/50 px-2 py-1 rounded-full border border-primary/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_4px_rgba(0,245,212,1)]"></span>
                          <span className="hidden sm:inline">Online</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-2 relative z-10">
                      {api.name}
                      <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">arrow_forward</span>
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-3 flex-grow relative z-10">
                      {api.description}
                    </p>

                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
