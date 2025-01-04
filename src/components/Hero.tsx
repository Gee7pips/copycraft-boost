import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-primary/60" />
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-stagger">
        <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium mb-6">
          South African Email Copywriting Specialist
        </span>
        <h1 className="hero-title mb-6 text-white">
          Compelling Email Copy That Connects and Converts
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Transform your email marketing with authentic South African storytelling that resonates with your audience and drives results.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn-primary">
            Book a Consultation
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="btn-secondary">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};