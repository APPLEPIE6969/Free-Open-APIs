import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide animate-slide-up">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
              <p className="mb-4">
                Last updated: October 26, 2023
              </p>
              <p className="mb-4">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">Collecting and Using Your Personal Data</h2>
              <p className="mb-4">
                We do not collect any personal data. This is a public directory of APIs.
              </p>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">Usage Data</h2>
              <p className="mb-4">
                We may collect usage data automatically when using the Service. This may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>
               <h2 className="text-xl font-bold text-white mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, You can contact us:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>By email: support@openapi-hub.com</li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
