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
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8">
          <div className="max-w-2xl mx-auto space-y-6 text-zinc-400 animate-slide-up">
            <section>
              <h2 className="text-xl font-bold text-white mb-2">1. Information We Collect</h2>
              <p>We only collect information necessary to provide our services. This may include standard web server logs (IP address, browser type) to ensure site security and performance.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-2">2. How We Use Information</h2>
              <p>We use the information we collect to operate and maintain our website, and to improve user experience. We do not sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-2">3. Cookies</h2>
              <p>We may use cookies to store information about visitor preferences and to record user-specific information on visits and pages the user views.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-2">4. Third Party Links</h2>
              <p>Our website contains links to external sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms of every site you visit.</p>
            </section>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
