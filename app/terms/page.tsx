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
          <div className="max-w-3xl mx-auto space-y-6 text-zinc-400">
            <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
            <p>
              Welcome to Open API Hub. By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-white">2. Use of Service</h2>
            <p>
              Open API Hub provides a directory of public APIs. You may use our service for lawful purposes only. We do not own or control the APIs listed in our directory.
            </p>

            <h2 className="text-2xl font-bold text-white">3. Disclaimer</h2>
            <p>
              The information provided on Open API Hub is for general informational purposes only. We make no representation or warranty of any kind regarding the accuracy, validity, reliability, or completeness of any information on the site.
            </p>

            <h2 className="text-2xl font-bold text-white">4. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the site after any changes indicates your acceptance of the new terms.
            </p>

            <div className="pt-8 border-t border-surface-border">
              <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
