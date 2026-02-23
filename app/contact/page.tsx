"use client";

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

        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8 scrollbar-hide">
          <div className="max-w-2xl mx-auto animate-slide-up">
            <div className="text-center mb-10">
              <span className="material-symbols-outlined text-6xl text-primary mb-4">mail</span>
              <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
              <p className="text-zinc-400 leading-relaxed">
                Have a question, suggestion, or found a bug? We'd love to hear from you.
              </p>
            </div>

            <div className="bg-surface-dark border border-surface-border rounded-xl p-6 md:p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 border border-surface-border rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 border border-surface-border rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black/50 border border-surface-border rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-black font-bold py-2 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-8 text-center">
              <p className="text-zinc-500 text-sm">
                Or email us directly at <a href="mailto:hello@openapi.hub" className="text-primary hover:underline">hello@openapi.hub</a>
              </p>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
