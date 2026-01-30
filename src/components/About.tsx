import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Over 20 years training NFL athletes, pros & everyday clients",
    "2016 NSCA Personal Trainer of the Year",
    "2015 Personal Trainer Hall of Fame Inductee",
    "Editor-in-Chief, NSCA Personal Training Quarterly",
    "Author of 4 bestselling fitness books",
    "Known as 'The Trainer of Trainers'",
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-foreground/10 flex items-center justify-center mb-4">
                    <span className="text-5xl font-black text-foreground/20">NT</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Nick Tumminello</p>
                </div>
              </div>
            </div>
            {/* Accent Box */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-lg -z-10" />
          </div>

          {/* Content Side */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">About</span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2 mb-6">
              Nick Tumminello
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Voted one of America's Top Trainers by Men's Health, Nick Tumminello is the owner of 
              Performance University International and has spent over two decades helping everyone 
              from NFL and NBA athletes to golf and tennis enthusiasts achieve their fitness goals.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Based in Boca Raton, Nick specializes in joint-friendly strength training methods 
              designed for active adults who want to stay strong, mobile, and injury-free.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
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
