import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-primary/60" />
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-stagger">
        <div className="flex items-center justify-center mb-8 animate-fade-up">
          <img 
            src="/lovable-uploads/65c8f1d3-ba5c-49aa-8378-b1ef69a9f1be.png"
            alt="Kabelo Kadiaka"
            className="w-32 h-32 rounded-full border-4 border-secondary object-cover animate-fade-in hover:scale-105 transition-all duration-300"
          />
        </div>
        <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium mb-6 animate-fade-up">
          South African Email Copywriting Specialist
        </span>
        <h1 className="hero-title mb-6 text-white animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Hi, I'm Kabelo Kadiaka
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          I write low-budget, high-quality emails and copy that connect with your audience and drive results.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Link to="/contact" className="btn-primary hover:scale-105 transition-transform duration-300">
            Book a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/portfolio" className="btn-secondary hover:scale-105 transition-transform duration-300">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};