import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-display">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="md:hidden p-1 text-zinc-400 hover:text-white">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight text-white animate-slide-up">Contact Us</h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8 animate-slide-up">
          <div className="max-w-3xl mx-auto space-y-6 text-zinc-300">
            <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>
            <p className="leading-relaxed">
              Have a question or feedback? We'd love to hear from you.
            </p>

            <div className="bg-surface-dark p-6 rounded-xl border border-surface-border mt-8">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                  <input type="text" id="name" className="w-full bg-black/50 border border-surface-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                  <input type="email" id="email" className="w-full bg-black/50 border border-surface-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-black/50 border border-surface-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-black font-semibold py-2 rounded-lg hover:bg-primary-dark transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
