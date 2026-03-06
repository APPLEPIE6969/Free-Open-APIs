"use client";

import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {submitted ? (
              <div className="bg-surface-dark border border-surface-border rounded-xl p-8 text-center animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-zinc-400">Thank you for reaching out. We'll be in touch shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-black font-bold rounded-lg py-3 hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-lg shadow-primary/20"
                >
                  Send Message
                </button>
              </form>
            )}

            <div className="mt-12 pt-8 border-t border-surface-border text-center">
              <p className="text-zinc-500 text-sm">
                Prefer email? Reach us at <a href="mailto:hello@openapi.hub" className="text-primary hover:underline">hello@openapi.hub</a>
              </p>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
