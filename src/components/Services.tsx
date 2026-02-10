import { Dumbbell, Heart, Target, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "STRENGTH TRAINING",
      description: "Build functional strength with joint-friendly methods that protect your body while maximizing results.",
    },
    {
      icon: Target,
      title: "GOLF & TENNIS",
      description: "Sport-specific training to improve your power, rotation, and endurance on the course or court.",
    },
    {
      icon: Heart,
      title: "ACTIVE AGING",
      description: "Stay strong, mobile, and independent with training designed for the unique needs of active adults.",
    },
    {
      icon: Users,
      title: "1-ON-1 COACHING",
      description: "Personalized attention and programming tailored to your goals, schedule, and fitness level.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mt-3 tracking-wide">
            Training With Nick
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Evidence-based programming designed for real results, not fitness fads.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in bg-background"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-foreground flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-2xl font-display tracking-wide text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="default" size="xl" asChild>
            <a href="#contact">
              Book a Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
