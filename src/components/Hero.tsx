import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-stagger">
        <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium mb-6">
          Transform Your Email Marketing
        </span>
        <h1 className="hero-title mb-6">
          Craft Compelling Email Copy That Converts
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Expert email copywriting that drives engagement, increases open rates, and
          generates more sales for your business.
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