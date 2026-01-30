import { Trophy, Award, BookOpen, Newspaper, Lightbulb } from "lucide-react";

const SocialProof = () => {
  const recognitions = [
    { icon: Trophy, text: "NSCA Personal Trainer of the Year" },
    { icon: Trophy, text: "Men's Health: One of America's Top Trainers" },
    { icon: Award, text: "Personal Trainer Hall of Fame Inductee" },
    { icon: Award, text: "Editor-in-Chief, NSCA Personal Training Quarterly" },
  ];

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
    <section className="bg-foreground py-16 md:py-24">
      <div className="container-tight px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Credentials</span>
          <h2 className="text-3xl md:text-4xl font-black text-background mt-2">
            Industry-Recognized Expert
          </h2>
        </div>

        {/* Recognitions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {recognitions.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 bg-background/5 rounded-lg border border-background/10 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-background text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Media & Books Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Media & Publications */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-background">Media & Publications</h3>
            </div>
            <p className="text-background/60 text-sm mb-4">
              Featured in 50+ fitness magazines and major publications
            </p>
            <div className="flex flex-wrap gap-2">
              {media.map((item, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-primary/20 text-primary text-xs font-semibold rounded-full"
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
              <h3 className="text-lg font-bold text-background">Author of 4+ Books</h3>
            </div>
            <ul className="space-y-2">
              {books.map((book, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-background/80 text-sm">{book}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Inventor Callout */}
        <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-background font-bold">Inventor & Product Creator</p>
              <p className="text-background/60 text-sm">Creator of the NT Loop resistance band system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
