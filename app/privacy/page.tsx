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
            <h1 className="text-lg font-bold tracking-tight text-white">
              Privacy Policy
            </h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8 animate-slide-up">
          <div className="max-w-3xl mx-auto space-y-6 text-zinc-400">
            <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>Your privacy is important to us. This Privacy Policy explains how Open API Hub collects, uses, and protects your information.</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">1. Information Collection</h3>
            <p>Open API Hub does not currently require account registration. We may collect anonymous usage data to improve our service.</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">2. Cookies</h3>
            <p>We may use cookies or similar technologies to remember your preferences and enhance your browsing experience.</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">3. Third-Party Links</h3>
            <p>Our website contains links to third-party APIs and websites. We are not responsible for the privacy practices or content of these third parties.</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">4. Changes to Policy</h3>
            <p>We reserve the right to modify this Privacy Policy at any time. Changes will be posted on this page.</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">5. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
