import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide animate-slide-up">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
              <p className="mb-4">
                Last updated: October 26, 2023
              </p>
              <p className="mb-4">
                Please read these terms and conditions carefully before using Our Service.
              </p>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">Interpretation and Definitions</h2>
              <p className="mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">Acknowledgment</h2>
              <p className="mb-4">
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">Links to Other Websites</h2>
              <p className="mb-4">
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
              </p>
              <p className="mb-4">
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
