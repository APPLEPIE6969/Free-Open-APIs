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

        <div className="flex-1 overflow-y-auto p-6 md:p-12 scrollbar-hide hero-gradient pb-32 md:pb-8">
          <div className="max-w-3xl mx-auto space-y-8 animate-slide-up">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Your Privacy is Important</h2>
              <p className="text-zinc-400 leading-relaxed">
                At Open API Hub, we are committed to maintaining the trust and confidence of our visitors to our web site. In particular, we want you to know that Open API Hub is not in the business of selling, renting or trading email lists with other companies and businesses for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Collection of Information</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We collect minimal information about you when you visit our website. This includes standard log data such as your IP address, browser type, and access times. This information is used for analytical purposes to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Cookies</h2>
              <p className="text-zinc-400 leading-relaxed">
                We may use cookies to improve your experience on our website. A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Changes to this Privacy Policy</h2>
              <p className="text-zinc-400 leading-relaxed">
                We may update this privacy policy from time to time. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="text-zinc-400 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us via our Contact page.
              </p>
            </section>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
