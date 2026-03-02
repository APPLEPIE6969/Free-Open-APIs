"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [query, setQuery] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
      <div className="md:hidden flex items-center gap-2 mr-4">
        <button
          className="p-1 text-zinc-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>
      <div className="flex-1 max-w-xl relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
          <span className="material-symbols-outlined text-[20px]">search</span>
        </span>
        <input
          className="w-full bg-surface-dark border border-surface-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-zinc-500 focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-sm outline-none"
          placeholder="Search for 'Weather', 'Crypto', 'Cats'..."
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
          <kbd className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 bg-black border border-surface-border rounded text-[10px] text-zinc-500 font-sans">
            ⌘K
          </kbd>
        </div>
      </div>
      <div className="flex items-center gap-4 ml-6">
        <div className="relative">
          <button
            className="p-2 text-zinc-400 hover:text-white hover:bg-surface-hover rounded-full transition-colors relative"
            onClick={() => setShowNotification(!showNotification)}
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
          </button>

          {showNotification && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-surface-dark border border-surface-border rounded-lg shadow-lg p-3 z-50 animate-fade-in">
              <p className="text-sm text-zinc-400 text-center">No new notifications</p>
            </div>
          )}
        </div>
        <Link
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-dark border border-surface-border hover:border-primary/50 text-white text-sm font-medium transition-all group"
          href="/"
        >
          <span className="material-symbols-outlined text-[18px]">code</span>
          <span>GitHub</span>
        </Link>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-surface-dark border-b border-surface-border p-4 flex flex-col gap-2 z-40 animate-slide-up md:hidden shadow-lg">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-surface-hover rounded-lg transition-colors">Home</Link>
          <Link href="/popular" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-surface-hover rounded-lg transition-colors">Popular APIs</Link>
          <Link href="/new" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-surface-hover rounded-lg transition-colors">New Arrivals</Link>
          <Link href="/categories" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-surface-hover rounded-lg transition-colors">Categories</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-surface-hover rounded-lg transition-colors">About</Link>
        </div>
      )}
    </header>
  );
}
