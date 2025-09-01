import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Catalog from "@/components/Catalog";
import TestForm from "@/components/TestForm";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Offers />
        <Catalog />
        <TestForm />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
