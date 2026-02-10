import { BookOpen, Newspaper, Lightbulb } from "lucide-react";
import industryBg from "@/assets/industry-bg.jpg";

const SocialProof = () => {
  const media = [
    "Men's Health",
    "Men's Fitness", 
    "Muscle & Performance",
    "Women's Health",
    "Bodybuilding.com",
  ];

  const books = [
    "Strength Training for Fat Loss",
    "Building Muscle and Performance",
    "Your Workout PERFECTED",
    "Co-author: NSCA Program Design Essentials",
  ];

  return (
    <section className="relative py-20 md:py-28">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img src={industryBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>
      <div className="container-tight px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Credentials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-background mt-3 tracking-wide">
            INDUSTRY RECOGNIZED
          </h2>
        </div>

        {/* Media & Books Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Media & Publications */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-display tracking-wide text-background">MEDIA & PUBLICATIONS</h3>
            </div>
            <p className="text-background/60 mb-6">
              Featured in 50+ fitness magazines and major publications
            </p>
            <div className="flex flex-wrap gap-2">
              {media.map((item, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Books */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-display tracking-wide text-background">AUTHOR OF 4+ BOOKS</h3>
            </div>
            <ul className="space-y-3">
              {books.map((book, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-background/80">{book}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Inventor Callout */}
        <div className="mt-12 p-8 bg-primary/10 rounded-xl border border-primary/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
              <Lightbulb className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-xl font-display tracking-wide text-background">INVENTOR & PRODUCT CREATOR</p>
              <p className="text-background/60">Creator of the NT Loop resistance band system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
