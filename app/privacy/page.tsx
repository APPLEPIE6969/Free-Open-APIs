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
          <div className="max-w-2xl mx-auto animate-slide-up">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-zinc-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-white">1. Information We Collect</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We only collect information that is necessary for the operation of our service. This may include:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li>Usage data and analytics</li>
                <li>Device information (browser type, operating system)</li>
                <li>IP addresses for security purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-white">2. How We Use Your Information</h2>
              <p className="text-zinc-400 leading-relaxed">
                We use the collected information to operate and maintain our website, improve user experience, and monitor for fraudulent activity. We do not sell your personal data to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-white">3. Cookies</h2>
              <p className="text-zinc-400 leading-relaxed">
                We use cookies to store information about your preferences and to record user-specific information on visits to pages. You can choose to disable cookies through your individual browser options.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-white">4. Third Party Links</h2>
              <p className="text-zinc-400 leading-relaxed">
                Our website contains links to other sites. Please be aware that we are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of each and every website that collects personally identifiable information.
              </p>
            </section>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
