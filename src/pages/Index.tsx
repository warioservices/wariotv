import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Catalog from "@/components/Catalog";
import Recommendations from "@/components/Recommendations";
import TestForm from "@/components/TestForm";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import { FennecMascot } from "@/components/ui/fennec-mascot";
import NewReleases from "@/components/NewReleases";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Offers />
        <NewReleases />
        <Catalog />
        <Recommendations />
        <TestForm />
        <Support />
      </main>
      <Footer />
      <FennecMascot />
    </div>
  );
};

export default Index;
