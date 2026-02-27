"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setMenuOpen(false); // Close menu if open
    }
  };

  const handleNotification = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20 relative">
      <div className="md:hidden flex items-center gap-2 mr-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1 text-zinc-400 hover:text-white"
        >
          <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background-dark border-b border-surface-border p-4 shadow-xl md:hidden flex flex-col gap-4 animate-slide-up z-50">
          <Link
            href="/popular"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-dark text-zinc-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <span className="material-symbols-outlined">whatshot</span>
            Popular APIs
          </Link>
          <Link
            href="/new"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-dark text-zinc-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <span className="material-symbols-outlined">new_releases</span>
            New Arrivals
          </Link>
           <Link
            href="/about"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-dark text-zinc-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <span className="material-symbols-outlined">info</span>
            About
          </Link>
          <Link
            href="/submit"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-dark text-zinc-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <span className="material-symbols-outlined">add_circle</span>
            Submit API
          </Link>
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
          onClick={handleNotification}
          className="p-2 text-zinc-400 hover:text-white hover:bg-surface-hover rounded-full transition-colors relative"
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
        </button>

        {/* Simple Notification Toast */}
        {showNotification && (
           <div className="absolute top-12 right-0 w-64 bg-surface-dark border border-surface-border rounded-lg p-3 shadow-xl z-50 animate-fade-in">
              <p className="text-xs text-zinc-300 flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                 No new notifications
              </p>
           </div>
        )}

        <Link
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-dark border border-surface-border hover:border-primary/50 text-white text-sm font-medium transition-all group"
          href="https://github.com/public-apis/public-apis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[18px]">code</span>
          <span>GitHub</span>
        </Link>
      </div>
    </header>
  );
}
