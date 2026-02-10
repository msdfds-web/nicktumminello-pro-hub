import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const books = [
    {
      title: "Strength Training for Fat Loss",
      publisher: "Human Kinetics",
      description: "The definitive guide to metabolic strength training for maximum fat loss.",
    },
    {
      title: "Building Muscle and Performance",
      publisher: "Human Kinetics", 
      description: "Science-based strategies for building muscle and athletic performance.",
    },
    {
      title: "Your Workout PERFECTED",
      publisher: "Human Kinetics",
      description: "Evidence-based exercise techniques for optimal results.",
    },
    {
      title: "NSCA Program Design Essentials",
      publisher: "NSCA (Co-Author)",
      description: "Comprehensive guide to program design for fitness professionals.",
    },
  ];

  const mediaFeatures = [
    "Men's Health",
    "Men's Fitness",
    "Muscle & Performance",
    "Women's Health",
    "Bodybuilding.com",
    "T-Nation",
    "STACK",
    "Personal Training Quarterly",
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-light text-foreground">
      <div className="container-tight px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Books Section */}
          <div className="animate-fade-in">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Published Works</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3 mb-8 tracking-wide">
              BESTSELLING AUTHOR
            </h2>
            
            <div className="space-y-4">
              {books.map((book, index) => (
                <div 
                  key={index}
                  className="p-5 bg-background rounded-lg border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-primary font-medium mt-1">{book.publisher}</p>
                      <p className="text-sm text-muted-foreground mt-2">{book.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media Features */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Media</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3 mb-8 tracking-wide">
              50+ PUBLICATIONS
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nick's expertise has been featured in over 50 fitness magazines and publications, 
              reaching millions of readers worldwide with evidence-based training information.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {mediaFeatures.map((media, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium text-foreground text-sm">{media}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-foreground rounded-lg">
              <p className="text-background/80 text-sm mb-2">Plus articles in</p>
              <p className="text-3xl font-display text-primary tracking-wide">50+ FITNESS MAGAZINES</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="default" size="xl" asChild>
            <a href="#contact">
              Train With Nick
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
