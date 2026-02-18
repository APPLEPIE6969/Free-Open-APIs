import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";
import APIList from "@/components/APIList";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide hero-gradient">
          <Hero />
          <FeaturedCollections />
          <CategoryGrid />
          <APIList />
          <Footer />
        </div>
      </main>
    </>
  );
}
