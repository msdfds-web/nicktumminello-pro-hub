import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import nickSeminar from "@/assets/nick-seminar.jpeg";
import nickBooks from "@/assets/nick-books.jpeg";
import nickTraining from "@/assets/nick-training.png";
import nickChestPress from "@/assets/nick-chest-press.jpg";

const About = () => {
  const highlights = [
    "Specializes in joint-friendly strength training methods",
    "Expert in golf fitness",
    "Written Four Books",
    "Taught at Fitness Conferences in 20+ Countries",
    "Featured in 100+ major websites and magazines",
    "Winner of the NSCA Personal Trainer of the Year Award",
  ];

  return (
    <section id="about" className="section-padding bg-brand-light">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content Side - Left */}
          <div className="animate-fade-in">
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
              Based in Boca Raton, Nick's joint-friendly strength training methods are 
              designed for active adults who want to stay strong, mobile, and injury-free. His 
              evidence-based approach has made him a trusted resource for both clients and fellow 
              fitness professionals worldwide.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg leading-5 mt-0.5">●</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button variant="default" size="xl" asChild>
                <a href="#contact">
                  Train With Nick
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Images Side - Right */}
          <div className="animate-fade-in flex flex-col gap-5" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={nickSeminar} 
                alt="Nick Tumminello teaching at a fitness seminar" 
                className="w-full object-contain"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={nickBooks} 
                  alt="Nick Tumminello with his published books" 
                  className="w-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={nickTraining} 
                    alt="Nick Tumminello training a client" 
                    className="w-full object-contain"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={nickChestPress} 
                    alt="Nick Tumminello spotting incline chest press" 
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
