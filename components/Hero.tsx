export default function Hero() {
  return (
    <div className="relative rounded-2xl overflow-hidden glass-card border mb-10 p-8 md:p-12 animate-slide-up">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,245,212,0.8)]"></span>
          1,400+ Free APIs
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Discover Free Public APIs
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          A collective list of free APIs for use in software and web development. No auth, no keys, just data.
        </p>
      </div>
    </div>
  );
}
