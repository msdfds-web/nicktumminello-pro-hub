import { CheckCircle2 } from "lucide-react";
import nickImage from "@/assets/nick-tumminello-2.jpg";

const About = () => {
  const highlights = [
    "Over 20 years training NFL athletes, pros & everyday clients",
    "Specializes in joint-friendly strength training methods",
    "Expert in golf and tennis performance training",
    "Known as 'The Trainer of Trainers'",
    "Runs mentorship programs for fitness professionals",
    "Owner of Performance University International",
  ];

  return (
    <section id="about" className="section-padding bg-brand-light">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={nickImage} 
                  alt="Nick Tumminello" 
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
              {/* Accent Box */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-lg -z-10" />
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">About</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3 mb-6 tracking-wide">
              NICK TUMMINELLO
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Voted one of America's Top Trainers by Men's Health, Nick Tumminello is the owner of 
              Performance University International and has spent over two decades helping everyone 
              from NFL and NBA athletes to golf and tennis enthusiasts achieve their fitness goals.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Based in Boca Raton, Nick specializes in joint-friendly strength training methods 
              designed for active adults who want to stay strong, mobile, and injury-free. His 
              evidence-based approach has made him a trusted resource for both clients and fellow 
              fitness professionals worldwide.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
