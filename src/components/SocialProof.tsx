const SocialProof = () => {
  const credentials = [
    { text: "Men's Health", subtitle: "America's Top Trainers" },
    { text: "NSCA", subtitle: "2016 Trainer of the Year" },
    { text: "Hall of Fame", subtitle: "2015 Inductee" },
    { text: "Bodybuilding.com", subtitle: "Featured Expert" },
  ];

  return (
    <section className="bg-brand-light border-y border-border">
      <div className="container-tight py-8 md:py-12">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
          Featured In & Recognized By
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {credentials.map((item, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <p className="text-lg md:text-xl font-bold text-foreground">{item.text}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
