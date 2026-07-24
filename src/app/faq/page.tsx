import { Header } from "@/components/ui/Header";
import { FaqSection } from "@/components/ui/FaqSection";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export default function FaqPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#161616] w-full">
      <DesktopScaler>
        <Header />
      </DesktopScaler>

      {/* FAQ Section */}
      <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] md:rounded-t-[26px] max-md:rounded-t-[9.71px]">
        <DesktopScaler bgColor="#F1E4DE" className="md:rounded-t-[26px] max-md:rounded-t-[9.71px] overflow-hidden w-full">
          <div className="w-full bg-[#F1E4DE] relative md:rounded-t-[26px] max-md:rounded-t-[9.71px] overflow-hidden pb-12">
            <FaqSection />
          </div>
        </DesktopScaler>
      </section>
    </main>
  );
}
