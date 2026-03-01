import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Dumbbell, FlaskConical, HeartPulse } from "lucide-react";

const Philosophy = () => {
  const principles = [
  {
    icon: ShieldCheck,
    title: "Joint-Friendly Exercises",
    description: "I specialize in building strength around aches, past injuries, and sensitive joints—so you can get fitter without flaring things up."
  },
  {
    icon: Dumbbell,
    title: "Barbell-Free Workouts",
    description: "I prioritize smart alternatives to traditional barbell lifts to help you get strong without excessive joint stress."
  },
  {
    icon: FlaskConical,
    title: "Science-Based Training",
    description: "Every program is guided by proven principles and research—not trends or fads."
  },
  {
    icon: HeartPulse,
    title: "Strength for Life",
    description: "We train to improve how you move, feel, and function—so you stay active, capable, and confident for years to come."
  }];


  return (
    <section className="py-20 md:py-28 bg-foreground">
      <div className="container-tight px-6 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">THE APPROACH</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-background mt-3 tracking-wide">COACH NICK'S TRAINING METHOD

          </h2>
          <p className="text-background/60 mt-4 text-lg">My proven method for building strength safely and sustainably.

          </p>
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((item, index) =>
          <div
            key={index}
            className="flex gap-6 animate-fade-in"
            style={{ animationDelay: `${0.1 * index}s` }}>

              <div className="flex-shrink-0">
                <item.icon className="h-10 w-10 text-primary/60" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-background mb-2">{item.title}</h3>
                <p className="text-background/60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          )}
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
    </section>);

};

export default Philosophy;