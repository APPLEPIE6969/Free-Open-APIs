"use client";

import { categories } from "@/app/data/apis";
import Link from "next/link";

export default function CategoryGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px] md:text-[24px]">category</span>
          Browse by Category
        </h2>
        <Link
          className="text-xs font-medium text-zinc-500 hover:text-primary transition-colors"
          href="#"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            className="group p-3 md:p-4 bg-surface-dark rounded-xl border border-surface-border hover:border-primary/50 transition-all hover:bg-surface-hover flex flex-col items-center text-center md:items-start md:text-left"
            href={`#${category.slug}`}
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
  );
}
