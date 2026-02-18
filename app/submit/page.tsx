import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";
import Link from "next/link";

export default function SubmitPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-display">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="md:hidden p-1 text-zinc-400 hover:text-white">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight text-white">Submit API</h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 flex items-center justify-center flex-col text-center pb-32 md:pb-8">
          <span className="material-symbols-outlined text-6xl text-zinc-600 mb-4">add_circle</span>
          <h2 className="text-xl font-semibold mb-2">Submit an API</h2>
          <p className="text-zinc-400 max-w-md mb-6">
            Found a great free API? Contribute to the directory by submitting a pull request to our repository.
          </p>
          <a
            href="https://github.com/public-apis/public-apis"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-black font-bold rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
            View on GitHub
          </a>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
