import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Results } from "@/components/Results";
import { Contact } from "@/components/Contact";
import { initParallax } from "@/utils/parallax";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".scroll-reveal").forEach((element) => {
      observer.observe(element);
    });

    const cleanup = initParallax();

    return () => {
      observer.disconnect();
      cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#9b87f5]">
      <Hero />
      <div className="scroll-reveal">
        <Benefits />
      </div>
      <div className="scroll-reveal">
        <Services />
      </div>
      <div className="scroll-reveal">
        <Results />
      </div>
      <div className="scroll-reveal">
        <Contact />
      </div>
    </div>
  );
};

export default Index;