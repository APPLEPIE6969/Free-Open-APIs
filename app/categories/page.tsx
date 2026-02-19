import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";
import Link from "next/link";
import { categories } from "@/app/data/apis";

export default function CategoriesPage() {
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
              All Categories
            </h1>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide hero-gradient pb-32 md:pb-8">
          <div className="max-w-6xl mx-auto animate-slide-up">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  className="group p-3 md:p-4 bg-surface-dark rounded-xl border border-surface-border hover:border-primary/50 transition-all hover:bg-surface-hover flex flex-col items-center text-center md:items-start md:text-left"
                  href={`/categories/${category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <div className="flex items-center justify-between w-full mb-2 md:mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                      <span className="material-symbols-outlined text-[18px] md:text-[24px]">{category.icon}</span>
                    </div>
                    <span className="text-[9px] md:text-[10px] font-semibold text-zinc-400 bg-black px-1.5 py-0.5 rounded-full border border-surface-border">
                      {category.apis.length}
                    </span>
                  </div>
                  <h3 className="text-white font-medium text-xs md:text-sm group-hover:text-primary truncate w-full">
                    {category.name}
                  </h3>
                  <p className="text-zinc-500 text-[10px] md:text-xs mt-1 line-clamp-2 w-full hidden md:block">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
