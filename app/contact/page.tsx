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
    setTimeout(() => setSubmitted(false), 3000);
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

        <div className="flex-1 overflow-y-auto p-6 md:p-12 scrollbar-hide hero-gradient pb-32 md:pb-8">
          <div className="max-w-2xl mx-auto space-y-8 animate-slide-up">
             <div className="text-center mb-10">
                <span className="material-symbols-outlined text-6xl text-primary mb-4">mail</span>
                <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
                <p className="text-zinc-400">Have a question or want to submit an API? Drop us a line.</p>
             </div>

             <div className="bg-surface-dark border border-surface-border rounded-xl p-6 md:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 animate-fade-in">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                      <span className="material-symbols-outlined text-3xl">check</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-zinc-400">We&apos;ll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                           <label htmlFor="name" className="text-xs font-semibold uppercase text-zinc-500">Name</label>
                           <input required type="text" id="name" className="w-full bg-black border border-surface-border rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-1">
                           <label htmlFor="email" className="text-xs font-semibold uppercase text-zinc-500">Email</label>
                           <input required type="email" id="email" className="w-full bg-black border border-surface-border rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                        </div>
                     </div>
                     <div className="space-y-1">
                        <label htmlFor="subject" className="text-xs font-semibold uppercase text-zinc-500">Subject</label>
                        <input required type="text" id="subject" className="w-full bg-black border border-surface-border rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="API Submission / Inquiry" />
                     </div>
                     <div className="space-y-1">
                        <label htmlFor="message" className="text-xs font-semibold uppercase text-zinc-500">Message</label>
                        <textarea required id="message" rows={5} className="w-full bg-black border border-surface-border rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Tell us what you need..."></textarea>
                     </div>
                     <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">send</span>
                        Send Message
                     </button>
                  </form>
                )}
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-surface-dark border border-surface-border rounded-lg p-4">
                   <span className="material-symbols-outlined text-zinc-400 mb-2">email</span>
                   <p className="text-sm font-medium text-white">hello@openapi.hub</p>
                </div>
                <div className="bg-surface-dark border border-surface-border rounded-lg p-4">
                   <span className="material-symbols-outlined text-zinc-400 mb-2">call</span>
                   <p className="text-sm font-medium text-white">+1 (555) 123-4567</p>
                </div>
                <div className="bg-surface-dark border border-surface-border rounded-lg p-4">
                   <span className="material-symbols-outlined text-zinc-400 mb-2">location_on</span>
                   <p className="text-sm font-medium text-white">San Francisco, CA</p>
                </div>
             </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
