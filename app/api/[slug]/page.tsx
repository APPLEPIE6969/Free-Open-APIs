import { getAllApiSlugs, getApiBySlug } from "../../data/utils";
import Sidebar from "../../../components/Sidebar";
import Link from "next/link";
import { notFound } from "next/navigation";
import TestApiSection from "../../../components/TestApiSection";

// Define params type for Next.js 15+
type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllApiSlugs();
}

export default async function ApiPage({ params }: { params: Params }) {
  const { slug } = await params;
  const data = getApiBySlug(slug);

  if (!data) {
    notFound();
  }

  const { api, category } = data;

  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-display">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <header className="h-16 flex items-center justify-between px-6 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="md:hidden p-1 text-zinc-400 hover:text-white">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight text-white truncate max-w-[200px] sm:max-w-md">
              {api.name}
            </h1>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide hero-gradient">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-primary transition-colors mb-6"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Back to Directory
              </Link>

              <div className="flex items-center gap-3 mb-4">
                 <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                    <span className="material-symbols-outlined text-[24px]">{category?.icon || "api"}</span>
                 </div>
                 <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{api.name}</h1>
                    <div className="flex items-center gap-2 mt-1 text-sm text-zinc-400">
                        <span>{category?.name}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1.5 text-xs text-primary/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_4px_rgba(0,245,212,1)]"></span>
                            {api.status || "Unknown"}
                        </div>
                    </div>
                 </div>
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8 border-l-4 border-primary/30 pl-4 py-1">
                {api.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-surface-dark rounded-xl border border-surface-border p-6">
                   <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">info</span>
                      Details
                   </h3>
                   <div className="space-y-4">
                      {api.url && (
                        <div>
                           <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider block mb-1">Website / Docs</span>
                           <a href={api.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                              {api.url}
                           </a>
                        </div>
                      )}
                      <div>
                         <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider block mb-1">Tags</span>
                         <div className="flex flex-wrap gap-2">
                            {api.tags?.map((tag) => (
                              <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-black text-zinc-300 border border-surface-border">
                                {tag}
                              </span>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-surface-dark rounded-xl border border-surface-border p-6 flex flex-col justify-center items-center text-center">
                   <div className="mb-4">
                      <span className="material-symbols-outlined text-4xl text-zinc-600">code</span>
                   </div>
                   <h3 className="text-white font-semibold mb-2">Ready to build?</h3>
                   <p className="text-zinc-400 text-sm mb-6">Check out the official documentation to get started.</p>
                   {api.url ? (
                     <a
                       href={api.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="px-6 py-2 rounded-lg bg-primary text-black font-semibold hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
                     >
                       Visit API
                       <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                     </a>
                   ) : (
                     <button disabled className="px-6 py-2 rounded-lg bg-zinc-700 text-zinc-400 font-semibold cursor-not-allowed">
                       No URL Available
                     </button>
                   )}
                </div>
              </div>

              <TestApiSection initialUrl={api.url || ""} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
