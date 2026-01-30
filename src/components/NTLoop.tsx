import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ntLoopImage from "@/assets/nt-loop-band.jpg";

const NTLoop = () => {
  const features = [
    "Superior comfort and durability",
    "Multiple resistance levels available",
    "Perfect for home or gym use",
    "Designed by Nick for optimal results",
  ];

  return (
    <section className="section-padding bg-foreground overflow-hidden">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative bg-background rounded-lg p-8 shadow-2xl">
              <img 
                src={ntLoopImage} 
                alt="NT Loop Resistance Band" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-primary rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Shop</span>
            <h2 className="text-3xl md:text-4xl font-black text-background mt-2 mb-6">
              NT Loop Resistance Bands
            </h2>
            <p className="text-background/70 mb-8 leading-relaxed text-lg">
              Train smarter with the NT Loop — the resistance band system designed by Nick for 
              better hip, glute, and full-body training. Trusted by trainers and athletes worldwide.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-background/90">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="xl" asChild>
              <a href="https://ntloop.com" target="_blank" rel="noopener noreferrer">
                Shop NT Loop
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NTLoop;
