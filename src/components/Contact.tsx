import { Mail, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center animate-stagger">
        <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
          Let's Connect
        </span>
        <h2 className="section-title text-primary-foreground">
          Ready to Transform Your Email Marketing?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Book a free consultation and let's discuss how we can help you achieve
          your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@example.com"
            className="btn-secondary flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            contact@example.com
          </a>
          <button className="btn-secondary">
            Schedule a Call
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};