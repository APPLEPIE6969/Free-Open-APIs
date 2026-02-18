"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to a backend
  };

  return (
    <>
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide animate-slide-up">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Submit an API</h1>
             <p className="text-zinc-400 mb-8">
                Know of a great free API? Let us know and we'll add it to the directory.
              </p>

            {submitted ? (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center animate-fade-in">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">check_circle</span>
                <h3 className="text-xl font-bold text-white mb-1">Submission Received!</h3>
                <p className="text-zinc-400">Thank you for contributing. We'll review your submission shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary hover:text-primary-dark font-medium transition-colors cursor-pointer"
                >
                  Submit another API
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">API Name</label>
                      <input required type="text" id="name" className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. Cat Facts" />
                  </div>
                   <div>
                      <label htmlFor="url" className="block text-sm font-medium text-zinc-300 mb-2">Website URL</label>
                      <input required type="url" id="url" className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="https://..." />
                  </div>
                   <div>
                      <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-2">Description</label>
                      <textarea required id="description" rows={4} className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="What does this API do?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer">
                      Submit API
                  </button>
              </form>
            )}
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
