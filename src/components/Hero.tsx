import { ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import nickImage from "@/assets/nick-tumminello.jpeg";
import bodybuildingLogo from "@/assets/bodybuilding-com-logo.png";
import nyTimesLogo from "@/assets/ny-times-logo.png";
import golfDigestLogo from "@/assets/golf-digest-logo.png";
import yahooSportsLogo from "@/assets/yahoo-sports-logo.png";

const Hero = () => {

  return (
    <section className="relative flex items-center bg-background pt-44 pb-16 overflow-hidden">
      {/* Red accent bar at top */}
      <div className="absolute top-16 left-0 w-full h-1 bg-primary" />
      
      <div className="container-tight relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            {/* Credentials Badge */}
            <div className="inline-flex items-center gap-2 mb-6 animate-fade-in text-secondary-foreground" style={{ animationDelay: '0.1s' }}>
              <span className="h-px w-8 bg-secondary-foreground" />
              <span className="font-semibold tracking-wider uppercase text-secondary-foreground text-lg">VOTED ONE OF AMERICA’S BEST TRAINERS BY MEN’S HEALTH

              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-none mb-6 animate-fade-in tracking-wide text-primary" style={{ animationDelay: '0.2s' }}>
              NICK<br />
              <span className="text-primary">TUMMINELLO</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>Boca Raton’s Best Personal Trainer for
Joint-Friendly Strength Training and Golf Fitness
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button variant="default" size="xl" asChild className="w-full md:w-auto px-12">
                <a href="#contact">
                  Become a Client
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Featured In Logos */}
            <div className="mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <p className="text-muted-foreground text-sm font-semibold tracking-wider uppercase mb-5">Featured In</p>
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                {[
                  { src: bodybuildingLogo, alt: "Bodybuilding.com", className: "h-12 md:h-16" },
                  { src: nyTimesLogo, alt: "NY Times", className: "h-14 md:h-20" },
                  { src: golfDigestLogo, alt: "Golf Digest", className: "h-14 md:h-20" },
                  { src: yahooSportsLogo, alt: "Yahoo Sports", className: "h-12 md:h-16" },
                ].map((item, i) => (
                  <div key={i} className={`${item.className}`}>
                    <img src={item.src} alt={item.alt} className="h-full w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img
                  alt="Nick Tumminello - Personal Trainer"
                  className="w-full h-auto object-cover"
                  src="/lovable-uploads/23987974-c82d-4976-9642-5b0a1cdb59db.png"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />

              </div>
              {/* Red accent block */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary rounded-lg -z-0" />
              {/* Black accent block */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-foreground rounded-lg -z-0" />
            </div>
            {/* Caption */}
            <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <ArrowUp className="mx-auto h-6 w-6 text-primary animate-bounce mb-2" />
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                Training the NFL's Fittest Man and Superbowl Champion,<br />
                <span className="text-foreground font-semibold">Steve Weatherford, NY Giants.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;