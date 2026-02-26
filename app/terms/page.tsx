import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-display">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="md:hidden p-1 text-zinc-400 hover:text-white">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight text-white">Terms of Service</h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8 animate-slide-up">
          <div className="max-w-2xl mx-auto space-y-6 text-zinc-400 leading-relaxed">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Open API Hub, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p>
              Open API Hub provides a directory of public APIs for developers. We do not own or operate the APIs listed unless explicitly stated.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">3. User Conduct</h2>
            <p>
              You agree to use the service only for lawful purposes. You are prohibited from violating any laws, infringing on intellectual property rights, or distributing malware.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. Disclaimer</h2>
            <p>
              The information provided on Open API Hub is for general informational purposes only. We make no warranties regarding the accuracy or reliability of any third-party APIs.
            </p>

            <p className="text-sm text-zinc-500 mt-8 pt-8 border-t border-surface-border">
              Last updated: February 2025
            </p>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
