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
            <h1 className="text-lg font-bold tracking-tight text-white">
              Terms of Service
            </h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8 animate-slide-up">
          <div className="max-w-3xl mx-auto space-y-6 text-zinc-400">
            <h2 className="text-2xl font-bold text-white mb-4">Terms of Service</h2>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>Welcome to Open API Hub. By accessing or using our website, you agree to be bound by these Terms of Service.</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">1. Use of Service</h3>
            <p>Open API Hub provides a directory of public APIs. We do not own or control the APIs listed. You are responsible for reviewing and complying with the terms of use for each individual API you access.</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">2. Accuracy of Information</h3>
            <p>We strive to keep our directory up-to-date, but we cannot guarantee the accuracy, completeness, or availability of any API listed. API endpoints, documentation, and terms may change without notice.</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">3. User Contributions</h3>
            <p>If you submit an API to our directory, you grant us the right to display and categorize your submission. You represent that you have the necessary rights to submit the information.</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">4. Disclaimer</h3>
            <p>The service is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the service or any third-party APIs.</p>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
