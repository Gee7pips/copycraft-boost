const stats = [
  { number: "150%", label: "Average ROI Increase" },
  { number: "45%", label: "Open Rate Improvement" },
  { number: "3.2x", label: "Click-Through Rate" },
  { number: "R280K+", label: "Additional Revenue Generated" },
];

export const Results = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium mb-6">
            Proven Results
          </span>
          <h2 className="section-title">Real Results for South African Businesses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how professional email copywriting has transformed local businesses.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-stagger">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};