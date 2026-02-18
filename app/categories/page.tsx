import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { categories } from "@/app/data/apis";

export default function CategoriesPage() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide animate-slide-up">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">All Categories</h1>
            <p className="text-zinc-400">Browse our extensive directory of free public APIs by category.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                className="group p-4 bg-surface-dark rounded-xl border border-surface-border hover:border-primary/50 transition-all hover:bg-surface-hover"
                href={`/category/${category.slug}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                    <span className="material-symbols-outlined">{category.icon}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-400 bg-black px-2 py-0.5 rounded-full border border-surface-border">
                    {category.count}
                  </span>
                </div>
                <h3 className="text-white font-medium text-sm group-hover:text-primary">
                  {category.name}
                </h3>
                <p className="text-zinc-500 text-xs mt-1 line-clamp-2">{category.description}</p>
              </Link>
            ))}
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
