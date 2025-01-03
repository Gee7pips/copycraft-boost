import { Check } from "lucide-react";

const services = [
  {
    title: "Email Sequence",
    price: "$997",
    description: "Convert subscribers into loyal customers",
    features: [
      "Welcome sequence (5 emails)",
      "Sales sequence optimization",
      "A/B testing strategy",
      "Performance analytics",
    ],
  },
  {
    title: "Campaign Optimization",
    price: "$1,497",
    description: "Maximize your email marketing ROI",
    features: [
      "Full campaign audit",
      "Copy optimization",
      "Subject line testing",
      "Conversion tracking",
    ],
  },
  {
    title: "Full Management",
    price: "Custom",
    description: "End-to-end email marketing solution",
    features: [
      "Strategy development",
      "Content calendar",
      "Ongoing optimization",
      "Monthly reporting",
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
          <h2 className="section-title">Choose Your Path to Growth</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect package to elevate your email marketing strategy
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 animate-stagger">
          {services.map((service, index) => (
            <div key={index} className="card p-8">
              <h3 className="text-2xl font-display font-semibold mb-2">
                {service.title}
              </h3>
              <div className="text-3xl font-bold mb-4">{service.price}</div>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full mt-8">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};