import { TrendingUp, Heart, Target, Globe } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased ROI",
    description: "Transform your email campaigns into powerful revenue generators with compelling copy that drives action.",
  },
  {
    icon: Heart,
    title: "Authentic Connection",
    description: "Build lasting relationships with your audience through genuine, South African storytelling that resonates.",
  },
  {
    icon: Target,
    title: "Higher Engagement",
    description: "Capture attention and maintain interest with professionally crafted email sequences.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Benefit from deep understanding of the South African market and consumer behavior.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/50 to-secondary/50 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 hover:scale-105 transition-all duration-300">
            Why Choose Professional Copywriting
          </span>
          <h2 className="section-title text-white">Transform Your Email Marketing</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover how professional copywriting can revolutionize your email campaigns
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex gap-6 hover:scale-105 transition-all duration-300 animate-slide-in bg-white/5 backdrop-blur-sm p-6 rounded-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 backdrop-blur-sm flex items-center justify-center animate-pulse">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-white/80">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};