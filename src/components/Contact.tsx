import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          {/* Header */}
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2 mb-6">
            Ready to Train?
          </h2>
          <p className="text-muted-foreground mb-10">
            Take the first step toward smarter, more effective training. Limited spots available 
            for personal training in Boca Raton.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Boca Raton, Florida</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <span>Contact for availability</span>
            </div>
          </div>

          {/* CTA */}
          <Button variant="default" size="xl">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
