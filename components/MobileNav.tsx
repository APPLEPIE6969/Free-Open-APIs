import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background-dark/95 backdrop-blur-md border-t border-surface-border flex items-center justify-around z-50 pb-safe">
      <Link href="/" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-primary transition-colors p-2">
        <span className="material-symbols-outlined text-[24px]">home</span>
        <span className="text-[10px] font-medium">Home</span>
      </Link>
      <Link href="/search" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-primary transition-colors p-2">
        <span className="material-symbols-outlined text-[24px]">search</span>
        <span className="text-[10px] font-medium">Search</span>
      </Link>
      <Link href="/categories" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-primary transition-colors p-2">
        <span className="material-symbols-outlined text-[24px]">grid_view</span>
        <span className="text-[10px] font-medium">Browse</span>
      </Link>
      <Link href="/account" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-primary transition-colors p-2">
        <span className="material-symbols-outlined text-[24px]">account_circle</span>
        <span className="text-[10px] font-medium">Account</span>
      </Link>
    </nav>
  );
}
