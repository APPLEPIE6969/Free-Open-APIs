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
          <div className="max-w-3xl mx-auto space-y-6 text-zinc-400">
            <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
            <p>
              We collect minimal information necessary to provide our service. This may include standard web server logs (IP address, browser type, etc.) for analytics and security purposes.
            </p>

            <h2 className="text-2xl font-bold text-white">2. How We Use Information</h2>
            <p>
              We use the information we collect to operate, maintain, and improve Open API Hub. We do not sell your personal data to third parties.
            </p>

            <h2 className="text-2xl font-bold text-white">3. Third-Party Links</h2>
            <p>
              Our website contains links to external APIs and websites. We are not responsible for the privacy practices or content of these third-party sites.
            </p>

            <h2 className="text-2xl font-bold text-white">4. Cookies</h2>
            <p>
              We may use cookies to enhance your experience. You can control cookie preferences through your browser settings.
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
