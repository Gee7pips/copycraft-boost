import { Check } from "lucide-react";

const services = [
  {
    title: "Email Sequence Creation",
    description: "Convert subscribers into loyal customers",
    features: [
      "Engaging welcome sequences",
      "Strategic sales funnels",
      "A/B testing optimization",
      "Performance tracking",
    ],
  },
  {
    title: "Campaign Development",
    description: "Maximize your email marketing impact",
    features: [
      "In-depth campaign analysis",
      "Compelling copy creation",
      "Subject line optimization",
      "Conversion strategy",
    ],
  },
  {
    title: "Full Email Management",
    description: "End-to-end email marketing solution",
    features: [
      "Custom strategy development",
      "Content calendar planning",
      "Continuous optimization",
      "Detailed reporting",
    ],
  },
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
            Services
          </span>
          <h2 className="section-title">Expert Email Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elevate your email marketing with professional South African copywriting expertise
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 animate-stagger">
          {services.map((service, index) => (
            <div key={index} className="card p-8">
              <h3 className="text-2xl font-display font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full mt-8">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};