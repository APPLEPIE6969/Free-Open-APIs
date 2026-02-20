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
          <div className="w-20 h-20 bg-surface-dark border border-surface-border rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-4xl text-zinc-500">person</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Account Features Coming Soon</h2>
          <p className="text-zinc-400 max-w-md mb-8">
            We're working on features that will allow you to save your favorite APIs, track usage, and manage your API keys.
          </p>
          <div className="flex gap-4">
             <Link
               href="/"
               className="px-6 py-2 bg-surface-dark border border-surface-border rounded-lg text-sm hover:border-primary/50 transition-colors"
             >
               Back to Home
             </Link>
             <button disabled className="px-6 py-2 bg-primary/20 text-primary rounded-lg text-sm cursor-not-allowed opacity-50">
               Sign In / Register
             </button>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
