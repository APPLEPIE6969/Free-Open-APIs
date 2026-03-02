interface CollectionCardProps {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

const collections: CollectionCardProps[] = [
  {
    title: "PokéAPI",
    description: "All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API.",
    icon: "capture",
    tags: ["REST", "No Auth"],
  },
  {
    title: "JSONPlaceholder",
    description: "Free fake API for testing and prototyping. Powered by JSON Server + LowDB.",
    icon: "data_object",
    tags: ["REST", "Mock"],
  },
  {
    title: "Cat Facts",
    description: "Daily cat facts for the feline enthusiast. Simple, reliable, and full of meows.",
    icon: "pets",
    tags: ["JSON", "Fun"],
  },
];

export default function FeaturedCollections() {
  return (
    <div className="mb-10 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">star</span>
          Featured Collections
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="bg-surface-dark rounded-xl border border-surface-border p-5 hover:border-primary/60 hover:scale-[1.02] transition-all duration-300 group cursor-pointer h-full flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined">{collection.icon}</span>
              </div>
              <div className="flex gap-2">
                {collection.tags.map((tag, i) => (
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
              {collection.title}
            </h3>
            <p className="text-zinc-400 text-sm mb-4 line-clamp-2 flex-grow">
              {collection.description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-surface-border mt-auto">
              <div className="flex items-center gap-1.5 text-xs text-primary/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_4px_rgba(0,245,212,1)]"></span>
                Online
              </div>
              <span className="text-xs font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 duration-300">
                Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
