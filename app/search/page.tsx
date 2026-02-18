import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { apis } from "@/app/data/apis";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string }>;
}) {
  const { q, sort } = await searchParams;
  const query = q?.toLowerCase() || "";

  let results = apis.filter((api) => {
    const matchName = api.name.toLowerCase().includes(query);
    const matchDesc = api.description.toLowerCase().includes(query);
    const matchTags = api.tags.some((tag) => tag.toLowerCase().includes(query));
    return matchName || matchDesc || matchTags;
  });

  if (sort === "popular") {
    // Dummy sort for now as we don't have real metrics
    results = results.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "new") {
     // Dummy sort
     results = results.reverse();
  }

  return (
    <>
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide animate-slide-up">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">
              {query ? `Search results for "${q}"` : "All APIs"}
            </h1>
            <p className="text-zinc-400">Found {results.length} API{results.length !== 1 ? "s" : ""}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {results.map((api) => (
              <Link
                key={api.id}
                href={api.link}
                target="_blank"
                className="bg-surface-dark rounded-xl border border-surface-border p-5 hover:border-primary/60 transition-all group cursor-pointer h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-hover text-zinc-300 flex items-center justify-center border border-surface-border group-hover:text-primary group-hover:border-primary/30 transition-colors">
                    <span className="material-symbols-outlined">{api.icon}</span>
                  </div>
                  <div className="flex gap-2">
                    {api.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-1 rounded bg-black text-zinc-300 border border-surface-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {api.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2 flex-grow">
                  {api.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-surface-border mt-auto">
                  <span className="text-xs text-zinc-500 group-hover:text-primary/80 transition-colors">
                    Visit Website
                  </span>
                  <span className="material-symbols-outlined text-zinc-500 group-hover:text-primary transition-colors text-sm">open_in_new</span>
                </div>
              </Link>
            ))}
          </div>

           {results.length === 0 && (
             <div className="text-center py-20 flex flex-col items-center">
               <span className="material-symbols-outlined text-6xl text-zinc-700 mb-4">search_off</span>
               <h3 className="text-xl font-bold text-zinc-400">No results found</h3>
               <p className="text-zinc-500 mt-2">Try adjusting your search terms</p>
             </div>
           )}

          <Footer />
        </div>
      </main>
    </>
  );
}
