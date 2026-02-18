import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";
import Link from "next/link";

export default function PopularPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-display">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="md:hidden p-1 text-zinc-400 hover:text-white">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight text-white">Popular APIs</h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 flex items-center justify-center flex-col text-center pb-32 md:pb-8">
          <span className="material-symbols-outlined text-6xl text-zinc-600 mb-4">whatshot</span>
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-zinc-400 max-w-md">This collection is currently being curated. Check back later for the most popular APIs.</p>
          <Link href="/" className="mt-6 px-4 py-2 bg-surface-dark border border-surface-border rounded-lg text-sm hover:border-primary/50 transition-colors">
            Back Home
          </Link>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
