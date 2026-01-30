import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const NTLoop = () => {
  return (
    <section className="section-padding bg-foreground">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Shop</span>
            <h2 className="text-3xl md:text-4xl font-black text-background mt-2 mb-6">
              NT Loop Resistance Bands
            </h2>
            <p className="text-background/70 mb-6 leading-relaxed">
              Train smarter with the NT Loop — the resistance band system designed by Nick for 
              better hip, glute, and full-body training. Trusted by trainers and athletes worldwide.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Superior comfort and durability",
                "Multiple resistance levels",
                "Perfect for home or gym use",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-background/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" asChild>
              <a href="https://ntloop.com" target="_blank" rel="noopener noreferrer">
                Shop NT Loop
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square bg-background/5 rounded-lg flex items-center justify-center border border-background/10">
              <div className="text-center p-8">
                <div className="w-40 h-40 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 border-4 border-primary/30">
                  <span className="text-4xl font-black text-primary">NT</span>
                </div>
                <p className="text-background/60 text-sm font-semibold">NT Loop</p>
                <p className="text-background/40 text-xs mt-1">Premium Resistance Bands</p>
              </div>
            </div>
            {/* Accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NTLoop;
