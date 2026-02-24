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
    // In a real app, you would send the data here
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
            <h1 className="text-lg font-bold tracking-tight text-white">
              Contact Us
            </h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8 animate-slide-up">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

            {submitted ? (
              <div className="bg-surface-dark border border-surface-border p-8 rounded-xl text-center animate-fade-in">
                <span className="material-symbols-outlined text-6xl text-primary mb-4">check_circle</span>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-zinc-400">Thank you for contacting us. We will get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary hover:text-primary-dark font-medium"
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
                    className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
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
                    className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="your.email@example.com"
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
                    className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">send</span>
                  Send Message
                </button>
              </form>
            )}

            <div className="mt-12 pt-8 border-t border-surface-border grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-dark flex items-center justify-center border border-surface-border text-primary shrink-0">
                  <span className="material-symbols-outlined">email</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-sm text-zinc-400 mt-1">support@openapihub.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-dark flex items-center justify-center border border-surface-border text-primary shrink-0">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">GitHub</h4>
                  <a href="https://github.com/public-apis/public-apis" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 mt-1 hover:text-primary transition-colors">
                    Contribute via GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
