import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import nickImage from "@/assets/nick-tumminello.jpeg";

const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Training Inquiry");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    window.location.href = `mailto:info@nicktumminello.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative flex items-center bg-background pt-44 pb-16 overflow-hidden">
      {/* Red accent bar at top */}
      <div className="absolute top-16 left-0 w-full h-1 bg-primary" />
      
      <div className="container-tight relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            {/* Credentials Badge */}
            <div className="inline-flex items-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="h-px w-8 bg-secondary-foreground" />
              <span className="font-semibold text-sm tracking-wider uppercase text-secondary-foreground">VOTED ONE OF AMERICA’S BEST TRAINERS BY MEN’S HEALTH

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

            {/* Lead Capture Form */}
            <form onSubmit={handleSubmit} className="space-y-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background border-border" />

              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background border-border" />

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-background border-border" />

              </div>
              <Button variant="default" size="xl" type="submit" className="w-full">
                Start Training Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div>
                <p className="text-4xl md:text-5xl font-display text-primary">20+</p>
                <p className="text-sm text-muted-foreground mt-1">Years</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-display text-primary">4+</p>
                <p className="text-sm text-muted-foreground mt-1">Books</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-display text-primary">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Publications</p>
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
                  className="w-full h-auto object-cover" />

              </div>
              {/* Red accent block */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary rounded-lg -z-0" />
              {/* Black accent block */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-foreground rounded-lg -z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;