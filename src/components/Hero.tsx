import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import nickImage from "@/assets/nick-tumminello.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-16 overflow-hidden">
      {/* Red accent bar at top */}
      <div className="absolute top-16 left-0 w-full h-1 bg-primary" />
      
      <div className="container-tight relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            {/* Credentials Badge */}
            <div className="inline-flex items-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                NSCA Personal Trainer of the Year
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Elite Personal Training in{" "}
              <span className="text-primary">Boca Raton</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Joint-friendly strength training for active adults. Optimize your performance on the golf course, tennis court, and in daily life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button variant="default" size="xl" asChild>
                <a href="#contact">
                  Start Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#about">
                  Learn More
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div>
                <p className="text-3xl md:text-4xl font-black text-primary">20+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-primary">4+</p>
                <p className="text-sm text-muted-foreground mt-1">Bestselling Books</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-primary">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Magazine Features</p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={nickImage} 
                  alt="Nick Tumminello - Personal Trainer" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Red accent block */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary rounded-lg -z-0" />
              {/* Black accent block */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-foreground rounded-lg -z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
