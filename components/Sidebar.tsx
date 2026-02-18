import Link from "next/link";
import { categories } from "@/app/data/apis";

export default function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-surface-border bg-sidebar-bg flex flex-col h-full hidden md:flex">
      <div className="h-16 flex items-center px-6 border-b border-surface-border">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-black shadow-lg shadow-primary/40">
            <span className="material-symbols-outlined text-[20px] font-bold">hub</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">Open API Hub</span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 scrollbar-hide">
        <div className="px-3 mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Discover</div>
        <Link
          className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/5 rounded-lg border border-primary/20"
          href="/"
        >
          <span className="material-symbols-outlined text-primary group-hover:text-primary transition-colors text-[20px]">home</span>
          Home
        </Link>
        <Link
          className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-dark rounded-lg transition-all"
          href="#"
        >
          <span className="material-symbols-outlined group-hover:text-primary transition-colors text-[20px]">whatshot</span>
          Popular APIs
        </Link>
        <Link
          className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-dark rounded-lg transition-all"
          href="#"
        >
          <span className="material-symbols-outlined group-hover:text-primary transition-colors text-[20px]">new_releases</span>
          New Arrivals
        </Link>
        <div className="px-3 mt-8 mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Categories</div>
        {categories.map((category) => (
          <Link
            key={category.name}
            className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-dark rounded-lg transition-all"
            href={`/#${category.slug}`}
          >
            <span className="material-symbols-outlined text-[18px] text-primary">{category.icon}</span>
            <span className="truncate">{category.name}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-surface-border">
        <Link
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-dark rounded-lg transition-all"
          href="#"
        >
          <span className="material-symbols-outlined">info</span>
          About
        </Link>
        <Link
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-dark rounded-lg transition-all"
          href="#"
        >
          <span className="material-symbols-outlined">add_circle</span>
          Submit API
        </Link>
      </div>
    </aside>
  );
}
