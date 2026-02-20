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
            <h1 className="text-lg font-bold tracking-tight text-white">Contact Us</h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8">
          <div className="max-w-2xl mx-auto animate-slide-up">
            <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Have questions, suggestions, or just want to say hello? We'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-surface-dark border border-surface-border rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">email</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  For general inquiries and support.
                </p>
                <a href="mailto:hello@openapihub.com" className="text-primary hover:underline">
                  hello@openapihub.com
                </a>
              </div>

              <div className="p-6 bg-surface-dark border border-surface-border rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">bug_report</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Report a Bug</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Found an issue? Let us know on GitHub.
                </p>
                <a
                  href="https://github.com/public-apis/public-apis/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub Issues
                </a>
              </div>
            </div>

            <form className="space-y-6 max-w-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary-dark transition-colors w-full md:w-auto"
                onClick={(e) => e.preventDefault()} // Prevent actual submission for now
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
