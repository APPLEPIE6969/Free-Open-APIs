"use client";

import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

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
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8 animate-slide-up">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-xl text-center">
                <span className="material-symbols-outlined text-4xl mb-2">check_circle</span>
                <h2 className="text-xl font-bold mb-2">Message Sent!</h2>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-surface-dark border border-surface-border rounded-lg text-sm text-white hover:bg-surface-hover transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-black font-bold py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">send</span>
                  Send Message
                </button>
              </form>
            )}

            <div className="mt-12 pt-8 border-t border-surface-border text-center text-zinc-500 text-sm">
              <p>Or email us directly at <a href="mailto:support@openapi.hub" className="text-primary hover:underline">support@openapi.hub</a></p>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
