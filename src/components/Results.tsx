const emailExamples = [
  {
    type: "Welcome Email",
    subject: "🌟 Welcome to the Family! Your Journey to Better Copy Starts Now",
    preview: "Dear [Name], imagine transforming your business with words that actually work. That's exactly what we're about to do together...",
    result: "85% open rate, 3x industry average engagement"
  },
  {
    type: "Sales Recovery",
    subject: "Is your shopping cart feeling lonely? 🛒",
    preview: "We noticed you left something special behind. Here's a cheeky 15% discount to sweeten the deal...",
    result: "42% recovery rate, R150K in recovered sales"
  },
  {
    type: "Event Invitation",
    subject: "🎯 Joburg's Biggest Marketing Workshop (Only 20 Seats Left!)",
    preview: "Skip the theory. Join us for real, actionable strategies that have generated R2M+ for local businesses...",
    result: "98% attendance rate, fully booked in 48 hours"
  },
  {
    type: "Product Launch",
    subject: "⚡ The Wait is Over | Introducing Something Revolutionary",
    preview: "What if you could double your sales without doubling your budget? Our new AI-powered copy tool makes it possible...",
    result: "R280K in first-week sales"
  }
];

export const Results = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium mb-6">
            Real Results
          </span>
          <h2 className="section-title">Copy That Converts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some real examples of emails that delivered exceptional results for South African businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-stagger">
          {emailExamples.map((example, index) => (
            <div 
              key={index} 
              className="card p-6 hover:scale-105 transition-all duration-300"
            >
              <div className="text-sm text-secondary font-medium mb-2">
                {example.type}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {example.subject}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {example.preview}
              </p>
              <div className="text-secondary font-medium text-sm">
                Result: {example.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};