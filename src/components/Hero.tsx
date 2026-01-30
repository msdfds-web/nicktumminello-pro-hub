import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
      
      <div className="container-tight relative z-10 section-padding">
        <div className="max-w-3xl">
          {/* Credentials Badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              2016 NSCA Personal Trainer of the Year
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-background leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Elite Personal Training in{" "}
            <span className="text-primary">Boca Raton</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-background/70 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Joint-friendly strength training for active adults. Optimize your performance on the golf course, tennis court, and in daily life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Start Training
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#about">
                Learn More
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-background/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-black text-primary">20+</p>
              <p className="text-sm text-background/60 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-primary">4</p>
              <p className="text-sm text-background/60 mt-1">Bestselling Books</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-primary">NFL</p>
              <p className="text-sm text-background/60 mt-1">& Pro Athletes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
