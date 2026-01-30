import { Dumbbell, Heart, Target, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build functional strength with joint-friendly methods that protect your body while maximizing results.",
    },
    {
      icon: Target,
      title: "Golf & Tennis Performance",
      description: "Sport-specific training to improve your power, rotation, and endurance on the course or court.",
    },
    {
      icon: Heart,
      title: "Active Aging",
      description: "Stay strong, mobile, and independent with training designed for the unique needs of active adults.",
    },
    {
      icon: Users,
      title: "1-on-1 Coaching",
      description: "Personalized attention and programming tailored to your goals, schedule, and fitness level.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-brand-light">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Services</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2">
            Training That Works For You
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Evidence-based programming designed for real results, not fitness fads.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-background p-8 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
