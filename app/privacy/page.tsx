import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-display">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="md:hidden p-1 text-zinc-400 hover:text-white">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight text-white">Privacy Policy</h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8 animate-slide-up">
          <div className="max-w-2xl mx-auto space-y-6 text-zinc-400 leading-relaxed">
            <h2 className="text-2xl font-bold text-white mb-4">1. Information Collection</h2>
            <p>
              We collect minimal information to provide our service. This may include IP addresses and browsing data for analytics purposes.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. Use of Information</h2>
            <p>
              The information we collect is used to improve the Open API Hub experience, analyze trends, and maintain site security.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Links</h2>
            <p>
              Our website contains links to other sites. We are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
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
