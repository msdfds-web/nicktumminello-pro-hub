import steveImg from "@/assets/steve-weatherford.png";
import quinnImg from "@/assets/quinn-sypniewski.webp";

const Accolades = () => {
  const testimonials = [
    {
      quote:
        "Nick Tumminello's expertise in exercise science is second to none. I've trained all over the country and found no one better. His methodology in regard to building a bigger, faster, stronger body is a formula for success.",
      name: "Steve Weatherford",
      title: "Former Punter For The NY Giants (2011-2014)",
      avatar: steveImg,
    },
    {
      quote:
        "Working with Nick Tumminello allowed me to see training in a whole new light. The way he was able to combine functional movement, flexibility, and strength training was like nothing I'd ever done before. Not only was I completely gassed at the end, but I found myself wanting more!",
      name: "Quinn Sypniewski",
      title: "Former Tight End for the Baltimore Ravens (2006-2009)",
      avatar: quinnImg,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background border-b border-border">
      <div className="container-tight px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            CREDIBILITY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mt-3 tracking-wide">
            TRAIN LIKE THE PROS
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Nick has trained Super Bowl Champion Steve Weatherford, pro golfers,
            and elite athletes across the NFL, MLB, and beyond.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Testimonials */}
          <div className="flex flex-col gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-border bg-card animate-fade-in"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-lg">
                      {t.name}
                    </p>
                    <p className="text-muted-foreground text-sm">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: YouTube Video */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl md:text-2xl font-display text-foreground mb-4 tracking-wide">
              Watch Coach Nick Training the NFL's Fittest Man{" "}
              <span className="text-primary">(1.9 Million Views)</span>
            </h3>
            <div className="relative w-full rounded-xl overflow-hidden border border-border" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/o3dCzUT0oIY?list=PL8VhzNx21yXlUdZMeg738MMAcpfSEG4r0"
                title="Coach Nick training the NFL's Fittest Man"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a
              href="#about"
              className="inline-flex items-center justify-center mt-6 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Learn More About Nick
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accolades;
