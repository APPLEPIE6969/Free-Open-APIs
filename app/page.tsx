import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";
import APIList from "@/components/APIList";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-display">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative pb-20 md:pb-0">
        <Header />
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide hero-gradient">
          <Hero />
          <FeaturedCollections />
          <CategoryGrid />
          <APIList />
          <Footer />
        </div>
        <MobileNav />
      </main>
    </div>
  );
}
