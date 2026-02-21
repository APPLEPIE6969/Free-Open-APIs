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

        <div className="flex-1 overflow-y-auto p-6 md:p-12 scrollbar-hide hero-gradient pb-32 md:pb-8">
          <div className="max-w-3xl mx-auto space-y-8 animate-slide-up">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
              <p className="text-zinc-400 leading-relaxed">
                Welcome to Open API Hub. By accessing our website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Use License</h2>
              <p className="text-zinc-400 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on Open API Hub&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside mt-4 text-zinc-400 space-y-2 ml-4">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Open API Hub&apos;s website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Disclaimer</h2>
              <p className="text-zinc-400 leading-relaxed">
                The materials on Open API Hub&apos;s website are provided on an &apos;as is&apos; basis. Open API Hub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Limitations</h2>
              <p className="text-zinc-400 leading-relaxed">
                In no event shall Open API Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Open API Hub&apos;s website, even if Open API Hub or a Open API Hub authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
