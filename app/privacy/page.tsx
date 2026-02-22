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
            <h1 className="text-lg font-bold tracking-tight text-white animate-slide-up">Privacy Policy</h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8 animate-slide-up">
          <div className="max-w-3xl mx-auto space-y-6 text-zinc-300">
            <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="leading-relaxed">
              Your privacy is important to us. It is Open API Hub's policy to respect your privacy regarding any information we may collect from you across our website.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Information We Collect</h2>
            <p className="leading-relaxed">
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Data Retention</h2>
            <p className="leading-relaxed">
              We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Sharing of Data</h2>
            <p className="leading-relaxed">
              We don't share any personally identifying information publicly or with third-parties, except when required to by law.
            </p>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
