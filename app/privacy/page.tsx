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

        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8 scrollbar-hide">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-zinc-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-white mb-2">1. Information Collection</h2>
                <p>
                  We do not collect any personal information when you visit Open API Hub. We may collect anonymous usage data to help us improve our service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">2. Cookies</h2>
                <p>
                  We use local storage to save your preferences, such as theme settings or search history. We do not use third-party tracking cookies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">3. Third-Party Links</h2>
                <p>
                  Our website contains links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">4. Changes to This Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes.
                </p>
              </section>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
