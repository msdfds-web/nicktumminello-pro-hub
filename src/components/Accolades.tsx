import nscaLogo from "@/assets/nsca-logo.png";
import mensHealthLogo from "@/assets/mens-health-logo.png";
import hallOfFameLogo from "@/assets/hall-of-fame-logo.png";
import ptqLogo from "@/assets/ptq-logo.png";

const Accolades = () => {
  const accolades = [
  {
    logo: nscaLogo,
    title: "NSCA",
    subtitle: "Personal Trainer of the Year",
    year: "2016",
    description: "Awarded by the National Strength & Conditioning Association"
  },
  {
    logo: mensHealthLogo,
    title: "Men's Health",
    subtitle: "America's Top Trainers",
    year: "",
    description: "Recognized as one of America's best personal trainers"
  },
  {
    logo: hallOfFameLogo,
    title: "Hall of Fame",
    subtitle: "Personal Trainer Hall of Fame",
    year: "2015",
    description: "Inducted into the Personal Trainer Hall of Fame"
  },
  {
    logo: ptqLogo,
    title: "NSCA PTQ",
    subtitle: "Editor-in-Chief",
    year: "",
    description: "Editor-in-Chief of NSCA Personal Training Quarterly"
  }];


  return (
    <section className="py-20 md:py-28 bg-background border-b border-border">
      <div className="container-tight px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">CREDIBILITY</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mt-3 tracking-wide">TRAIN LIKE THE PROS

          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Nick has trained Super Bowl Champion Steve Weatherford, pro golfers, and elite athletes across the NFL, MLB, and beyond.

          </p>
        </div>

        {/* Accolades Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accolades.map((item, index) =>
          <div
            key={index}
            className="group relative p-8 rounded-xl border-2 border-border bg-background hover:border-primary/50 transition-all duration-300 animate-fade-in text-center"
            style={{ animationDelay: `${0.1 * index}s` }}>

              {/* Year Badge */}
              {item.year &&
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  {item.year}
                </div>
            }
              
              {/* Logo */}
              <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center mb-5 overflow-hidden p-2">
                <img
                src={item.logo}
                alt={item.title}
                className="w-full h-full object-contain" />

              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-display tracking-wide text-foreground mb-1">{item.title}</h3>
              <p className="text-primary font-semibold text-sm mb-3">{item.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default Accolades;