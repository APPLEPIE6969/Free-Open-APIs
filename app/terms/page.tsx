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
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8">
          <div className="max-w-2xl mx-auto space-y-6 text-zinc-400 animate-slide-up">
            <section>
              <h2 className="text-xl font-bold text-white mb-2">1. Introduction</h2>
              <p>Welcome to Open API Hub. By accessing our website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-2">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Open API Hub's website for personal, non-commercial transitory viewing only.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-2">3. Disclaimer</h2>
              <p>The materials on Open API Hub's website are provided on an 'as is' basis. Open API Hub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-2">4. Limitations</h2>
              <p>In no event shall Open API Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Open API Hub's website.</p>
            </section>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
