import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide animate-slide-up">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">About Open API Hub</h1>
            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
              <p className="mb-4 text-lg leading-relaxed">
                Open API Hub is a curated collection of free public APIs for developers. We believe in the power of open data and the open web.
              </p>
              <p className="mb-4">
                Our mission is to make it easy for developers to find and use high-quality APIs for their projects. Whether you're building a side project, a startup, or an enterprise application, you'll find something useful here.
              </p>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">Why use Open API Hub?</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong className="text-white">Curated Selection:</strong> We manually review every API to ensure it meets our quality standards.</li>
                <li><strong className="text-white">Up-to-Date:</strong> We regularly check APIs to make sure they are still active and maintained.</li>
                <li><strong className="text-white">Free to Use:</strong> All APIs listed here have a free tier or are completely free.</li>
              </ul>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">Contributing</h2>
              <p className="mb-4">
                Open API Hub is a community-driven project. If you know of a great API that we're missing, please submit it!
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
