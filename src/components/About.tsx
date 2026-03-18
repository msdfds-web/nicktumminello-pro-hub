import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import nickSeminar from "@/assets/nick-seminar.jpeg";
import nickBooks from "@/assets/nick-books.jpeg";
import nickTraining from "@/assets/nick-training.png";
import nickChestPress from "@/assets/nick-chest-press.jpg";

const About = () => {
  const highlights = [
    { text: "Specializes in joint-friendly strength training methods" },
    { text: "Expert in golf fitness" },
    { 
      text: "Written Four Books",
      subItems: [
        { title: "Strength Training for Fat Loss", url: "https://www.amazon.com/Strength-Training-Loss-Nick-Tumminello/dp/1718218486/ref=sr_1_1?crid=2FBT4MOALC2XR&dib=eyJ2IjoiMSJ9.5C96fIJtzrxGny9ojXMh_JCwPFRFgCO89-8tCuRkZqCp-Wwb4SqQT0T2gPIBd-vR0kObHtm7uuLmrFnD-DZn7pAysKD4BQSaMMbnLvF0r-h1HvP9o6k-1k8yOKcRuI2HtQVz_sAcbFEUKJo9_4k-dqWX-3HLua2LSVxhn1Y3eqvK8JO8wWJAGA9DjbcXH8vEl-eNWjOZUJsh7cbJDVc04VWqAPLCxpK7VFQyVcrFjqY.e25cR2nYxqqDfdJR0Byh6ZmacKxBwwqD6dTWzEZM6Rg&dib_tag=se&keywords=nick+tumminello&qid=1773418601&sprefix=nick+tumminello%2Caps%2C194&sr=8-1" },
        { title: "Strength Zone Training", url: "https://www.amazon.com/Strength-Zone-Training-Nick-Tumminello/dp/1718211473/ref=sr_1_2?crid=2FBT4MOALC2XR&dib=eyJ2IjoiMSJ9.5C96fIJtzrxGny9ojXMh_JCwPFRFgCO89-8tCuRkZqCp-Wwb4SqQT0T2gPIBd-vR0kObHtm7uuLmrFnD-DZn7pAysKD4BQSaMMbnLvF0r-h1HvP9o6k-1k8yOKcRuI2HtQVz_sAcbFEUKJo9_4k-dqWX-3HLua2LSVxhn1Y3eqvK8JO8wWJAGA9DjbcXH8vEl-eNWjOZUJsh7cbJDVc04VWqAPLCxpK7VFQyVcrFjqY.e25cR2nYxqqDfdJR0Byh6ZmacKxBwwqD6dTWzEZM6Rg&dib_tag=se&keywords=nick+tumminello&qid=1773418601&sprefix=nick+tumminello%2Caps%2C194&sr=8-2" },
        { title: "Your Workout Perfected", url: "https://www.amazon.com/Your-Workout-PERFECTED-Nick-Tumminello-ebook/dp/B07CV2KHNZ/ref=sr_1_5?crid=2FBT4MOALC2XR&dib=eyJ2IjoiMSJ9.5C96fIJtzrxGny9ojXMh_JCwPFRFgCO89-8tCuRkZqCp-Wwb4SqQT0T2gPIBd-vR0kObHtm7uuLmrFnD-DZn7pAysKD4BQSaMMbnLvF0r-h1HvP9o6k-1k8yOKcRuI2HtQVz_sAcbFEUKJo9_4k-dqWX-3HLua2LSVxhn1Y3eqvK8JO8wWJAGA9DjbcXH8vEl-eNWjOZUJsh7cbJDVc04VWqAPLCxpK7VFQyVcrFjqY.e25cR2nYxqqDfdJR0Byh6ZmacKxBwwqD6dTWzEZM6Rg&dib_tag=se&keywords=nick+tumminello&qid=1773418601&sprefix=nick+tumminello%2Caps%2C194&sr=8-5" },
        { title: "Building Muscle & Performance", url: "https://www.amazon.com/Building-Muscle-Performance-Program-Strength/dp/1492512702/ref=sr_1_4?crid=2FBT4MOALC2XR&dib=eyJ2IjoiMSJ9.5C96fIJtzrxGny9ojXMh_JCwPFRFgCO89-8tCuRkZqCp-Wwb4SqQT0T2gPIBd-vR0kObHtm7uuLmrFnD-DZn7pAysKD4BQSaMMbnLvF0r-h1HvP9o6k-1k8yOKcRuI2HtQVz_sAcbFEUKJo9_4k-dqWX-3HLua2LSVxhn1Y3eqvK8JO8wWJAGA9DjbcXH8vEl-eNWjOZUJsh7cbJDVc04VWqAPLCxpK7VFQyVcrFjqY.e25cR2nYxqqDfdJR0Byh6ZmacKxBwwqD6dTWzEZM6Rg&dib_tag=se&keywords=nick+tumminello&qid=1773418601&sprefix=nick+tumminello%2Caps%2C194&sr=8-4" },
      ]
    },
    { text: "Taught at Fitness Conferences in 20+ Countries" },
    { text: "Featured in 100+ major websites and magazines" },
    { text: "Winner of the NSCA Personal Trainer of the Year Award" },
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
            <p className="mb-6 leading-relaxed text-xs text-muted-foreground">
              Voted one of America's Top Trainers by Men's Health, Nick Tumminello has spent over two decades helping everyone from NFL and NBA athletes to active adults, golfers, and tennis enthusiasts feel and perform their best.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
              Based in Boca Raton, Nick's joint-friendly strength training methods are designed for people who want to get stronger, move better, and stay active without beating up their body—even if they've struggled with cranky knees, hips, backs, or shoulders. His evidence-based approach has made him a trusted resource for both clients and fellow fitness professionals worldwide.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index}>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg leading-5 mt-0.5">●</span>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                  {item.subItems && (
                    <ul className="ml-8 mt-2 space-y-1.5">
                      {item.subItems.map((sub, subIndex) => (
                        <li key={subIndex} className="flex items-start gap-2">
                          <span className="text-primary text-sm leading-5 mt-0.5">○</span>
                          <a
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors underline underline-offset-2 italic"
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
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
                className="w-full object-contain" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={nickBooks}
                  alt="Nick Tumminello with his published books"
                  className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-5">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={nickTraining}
                    alt="Nick Tumminello training a client"
                    className="w-full object-contain" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={nickChestPress}
                    alt="Nick Tumminello spotting incline chest press"
                    className="w-full object-contain" />
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
