import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-display">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="md:hidden p-1 text-zinc-400 hover:text-white">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight text-white">About</h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">About Open API Hub</h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Open API Hub is a curated collection of free public APIs for developers.
              Our goal is to provide a clean, modern interface to discover and test APIs for your next project.
            </p>
            <h3 className="text-xl font-semibold mb-3">Features</h3>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-8">
              <li>No Authentication required for most APIs</li>
              <li>Direct testing console to make requests from the browser</li>
              <li>Categorized directory for easy browsing</li>
              <li>Mobile-optimized responsive design</li>
            </ul>
            <div className="p-4 bg-surface-dark border border-surface-border rounded-xl">
              <p className="text-sm text-zinc-500">
                Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
