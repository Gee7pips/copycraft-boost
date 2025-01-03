import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Results } from "@/components/Results";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Results />
      <Contact />
    </div>
  );
};

export default Index;