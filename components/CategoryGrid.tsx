import Link from "next/link";
import { categories } from "@/app/data/apis";

export default function CategoryGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">category</span>
          Browse by Category
        </h2>
        <Link
          className="text-xs font-medium text-zinc-500 hover:text-primary transition-colors"
          href="#"
        >
          View all categories
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            className="group p-4 bg-surface-dark rounded-xl border border-surface-border hover:border-primary/50 transition-all hover:bg-surface-hover"
            href={`#${category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                <span className="material-symbols-outlined">{category.icon}</span>
              </div>
              <span className="text-[10px] font-semibold text-zinc-400 bg-black px-2 py-0.5 rounded-full border border-surface-border">
                {category.apis.length}
              </span>
            </div>
            <h3 className="text-white font-medium text-sm group-hover:text-primary truncate">
              {category.name}
            </h3>
            <p className="text-zinc-500 text-xs mt-1 line-clamp-2">
              {category.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
