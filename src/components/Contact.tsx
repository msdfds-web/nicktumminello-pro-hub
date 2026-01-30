import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          {/* Header */}
          <span className="text-primary-foreground/80 font-semibold text-sm tracking-wider uppercase">Get Started</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground mt-3 mb-6 tracking-wide">
            READY TO TRAIN?
          </h2>
          <p className="text-primary-foreground/80 mb-10 text-lg">
            Take the first step toward smarter, more effective training. Limited spots available 
            for personal training in Boca Raton.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
              <MapPin className="h-5 w-5 text-primary-foreground" />
              <span>Boca Raton, Florida</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
              <Mail className="h-5 w-5 text-primary-foreground" />
              <span>Contact for availability</span>
            </div>
          </div>

          {/* CTA */}
          <Button variant="dark" size="xl">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
