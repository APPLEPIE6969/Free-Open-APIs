"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim()) {
      router.push(`/search?q=${encodeURIComponent(e.currentTarget.value.trim())}`);
    }
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
      <div className="md:hidden flex items-center gap-2 mr-4">
        <button
          className="p-1 text-zinc-400 hover:text-white"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span className="material-symbols-outlined">{showMobileMenu ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="absolute top-16 left-0 right-0 bg-surface-dark border-b border-surface-border p-4 flex flex-col gap-4 z-50 md:hidden animate-slide-up shadow-xl">
          <Link href="/popular" className="text-zinc-300 hover:text-white font-medium">Popular APIs</Link>
          <Link href="/new" className="text-zinc-300 hover:text-white font-medium">New Arrivals</Link>
          <Link href="/categories" className="text-zinc-300 hover:text-white font-medium">Categories</Link>
          <Link href="/about" className="text-zinc-300 hover:text-white font-medium">About</Link>
          <Link href="/submit" className="text-zinc-300 hover:text-white font-medium">Submit API</Link>
        </div>
      )}

      <div className="flex-1 max-w-xl relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
          <span className="material-symbols-outlined text-[20px]">search</span>
        </span>
        <input
          className="w-full bg-surface-dark border border-surface-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-zinc-500 focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-sm outline-none"
          placeholder="Search for 'Weather', 'Crypto', 'Cats'..."
          type="text"
          onKeyDown={handleSearch}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
          <kbd className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 bg-black border border-surface-border rounded text-[10px] text-zinc-500 font-sans">
            ⌘K
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-4 ml-6 relative">
        <button
          className="p-2 text-zinc-400 hover:text-white hover:bg-surface-hover rounded-full transition-colors relative"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
        </button>

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div className="absolute top-12 right-0 w-64 bg-surface-dark border border-surface-border rounded-xl shadow-xl z-50 animate-slide-up overflow-hidden">
            <div className="p-3 border-b border-surface-border bg-black/50">
              <h3 className="text-sm font-bold text-white">Notifications</h3>
            </div>
            <div className="p-4 text-center text-zinc-400 text-sm">
              No new notifications.
            </div>
          </div>
        )}

        <Link
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-dark border border-surface-border hover:border-primary/50 text-white text-sm font-medium transition-all hover:scale-105 group"
          href="/"
        >
          <span className="material-symbols-outlined text-[18px]">code</span>
          <span>GitHub</span>
        </Link>
      </div>
    </header>
  );
}
