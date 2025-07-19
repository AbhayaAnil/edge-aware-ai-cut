import Hero from "@/components/Hero";
import TechBreakdown from "@/components/TechBreakdown";
import Comparison from "@/components/Comparison";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import APISection from "@/components/APISection";
import Security from "@/components/Security";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TechBreakdown />
      <Comparison />
      <UseCases />
      <Testimonials />
      <Pricing />
      <APISection />
      <Security />
      <Footer />
    </div>
  );
};

export default Index;
