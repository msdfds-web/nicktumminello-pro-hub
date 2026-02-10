import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ntLoopImage from "@/assets/nt-loop-band.jpg";
import ntLoopBlue from "@/assets/nt-loop-blue.png";
import ntLoopBlack from "@/assets/nt-loop-black.png";

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
            <div className="relative bg-background rounded-xl p-8 shadow-2xl">
              <img 
                src={ntLoopImage} 
                alt="NT Loop Resistance Band" 
                className="w-full h-auto"
              />
              {/* Overlapping small images */}
              <img 
                src={ntLoopBlue} 
                alt="Blue NT Loop" 
                className="absolute -top-6 -right-6 w-24 h-24 object-cover rounded-lg shadow-lg border-2 border-background"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-lg shadow-lg border-2 border-background bg-background overflow-hidden flex items-center justify-center">
                <img 
                  src={ntLoopBlack} 
                  alt="Black NT Loop" 
                  className="w-[85%] h-auto object-contain"
                />
              </div>
            </div>
            {/* Decorative red border circle */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-primary rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Shop</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-background mt-3 mb-6 tracking-wide">
              NT LOOP
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
