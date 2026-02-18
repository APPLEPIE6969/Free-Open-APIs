import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
      <div className="md:hidden flex items-center gap-2 mr-4">
        <button className="p-1 text-zinc-400 hover:text-white">
          <span className="material-symbols-outlined">menu</span>
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
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
          <kbd className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 bg-black border border-surface-border rounded text-[10px] text-zinc-500 font-sans">
            ⌘K
          </kbd>
        </div>
      </div>
      <div className="flex items-center gap-4 ml-6">
        <button className="p-2 text-zinc-400 hover:text-white hover:bg-surface-hover rounded-full transition-colors relative">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
        </button>
        <Link
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-dark border border-surface-border hover:border-primary/50 text-white text-sm font-medium transition-all group"
          href="/"
        >
          <span className="material-symbols-outlined text-[18px]">code</span>
          <span>GitHub</span>
        </Link>
      </div>
    </header>
  );
}
