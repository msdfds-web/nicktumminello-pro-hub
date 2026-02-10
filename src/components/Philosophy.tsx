import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Philosophy = () => {
  const principles = [
    {
      number: "01",
      title: "Evidence-Based Training",
      description: "Every exercise and program is backed by scientific research, not fitness trends or fads.",
    },
    {
      number: "02", 
      title: "Joint-Friendly Methods",
      description: "Training should make you feel better, not break you down. Smart exercise selection protects your body.",
    },
    {
      number: "03",
      title: "Individual Programming",
      description: "No cookie-cutter programs. Every client gets training tailored to their goals, limitations, and lifestyle.",
    },
    {
      number: "04",
      title: "Sustainable Results",
      description: "Build strength and fitness that lasts for years, not just weeks. Long-term progress over quick fixes.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-foreground">
      <div className="container-tight px-6 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Philosophy</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-background mt-3 tracking-wide">
            THE APPROACH
          </h2>
          <p className="text-background/60 mt-4 text-lg">
            20+ years of experience distilled into a training philosophy that works for real people with real lives.
          </p>
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((item, index) => (
            <div 
              key={index}
              className="flex gap-6 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex-shrink-0">
                <span className="text-5xl font-display text-primary/30">{item.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-background mb-2">{item.title}</h3>
                <p className="text-background/60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 animate-fade-in">
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
