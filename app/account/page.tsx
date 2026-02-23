import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";
import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-display">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="md:hidden p-1 text-zinc-400 hover:text-white">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight text-white">Account</h1>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 flex items-center justify-center flex-col text-center pb-32 md:pb-8 animate-slide-up">
          <div className="bg-surface-dark p-8 rounded-2xl border border-surface-border max-w-sm w-full">
            <span className="material-symbols-outlined text-6xl text-primary/50 mb-6">account_circle</span>
            <h2 className="text-2xl font-bold mb-2">My Account</h2>
            <p className="text-zinc-400 mb-8">
              User accounts and profile management features are currently in development.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-surface-border/50 text-zinc-400 font-medium py-2 rounded-lg cursor-not-allowed">
                Login
              </button>
              <button className="w-full bg-primary/10 text-primary font-medium py-2 rounded-lg cursor-not-allowed border border-primary/20">
                Sign Up
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-surface-border">
              <p className="text-xs text-zinc-500">
                Check back soon for updates!
              </p>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
