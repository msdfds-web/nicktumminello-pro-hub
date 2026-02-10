import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Training Inquiry");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`);
    window.location.href = `mailto:info@nicktumminello.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative section-padding bg-primary">
      {/* Gradient overlay fading to black at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground pointer-events-none" />
      <div className="container-tight relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          {/* Header */}
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Get Started</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mt-3 mb-6 tracking-wide">
            READY TO TRAIN?
          </h2>
          <p className="text-foreground/70 mb-10 text-lg">
            Take the first step toward smarter, more effective training. Limited spots available 
            for personal training in Boca Raton.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <div className="flex items-center justify-center gap-2 text-foreground/70">
              <MapPin className="h-5 w-5 text-foreground" />
              <span>Boca Raton, Florida</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-foreground/70">
              <Mail className="h-5 w-5 text-foreground" />
              <span>Contact for availability</span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-background border-foreground text-foreground placeholder:text-foreground/50"
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-foreground text-foreground placeholder:text-foreground/50"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-background border-foreground text-foreground placeholder:text-foreground/50"
              />
            </div>
            <Textarea
              placeholder="Tell us about your fitness goals..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="bg-background border-foreground text-foreground placeholder:text-foreground/50 resize-none"
            />
            <Button variant="default" size="xl" type="submit" className="w-full">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
