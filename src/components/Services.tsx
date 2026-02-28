import { Dumbbell, Heart, Target, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bodybuildingLogo from "@/assets/bodybuilding-com-logo.png";
import nyTimesLogo from "@/assets/ny-times-logo.png";
import golfDigestLogo from "@/assets/golf-digest-logo.png";
import yahooSportsLogo from "@/assets/yahoo-sports-logo.png";

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "JOINT-FRIENDLY STRENGTH TRAINING",
      description: "Build functional strength with methods designed to protect your joints while maximizing results.",
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
            TRAINING WITH NICK
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Evidence-based programming designed for real results, not fitness fads.
          </p>
        </div>

        {/* Featured In */}
        <div className="mb-14 animate-fade-in">
          <p className="text-center text-muted-foreground text-sm font-semibold tracking-wider uppercase mb-6">Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { src: bodybuildingLogo, alt: "Bodybuilding.com", className: "h-10 md:h-12" },
              { src: nyTimesLogo, alt: "NY Times", className: "h-14 md:h-16" },
              { src: golfDigestLogo, alt: "Golf Digest", className: "h-14 md:h-16" },
              { src: yahooSportsLogo, alt: "Yahoo Sports", className: "h-10 md:h-12" },
            ].map((item, i) => (
              <div key={i} className={`${item.className} grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300`}>
                <img src={item.src} alt={item.alt} className="h-full w-auto object-contain" />
              </div>
            ))}
            <span className="text-muted-foreground font-display text-lg tracking-wide">& more</span>
          </div>
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
