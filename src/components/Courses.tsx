import { GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      title: "Movement Performance Assessment (MPA)",
      description:
        "The first assessment designed specifically for Personal Trainers. Learn how to determine which exercises each client should do right from the first session.",
      highlights: [
        "7 Movement Tests That Resemble Actual Exercise",
        "Simple And Fast Testing Procedures",
        "Immediate Feedback On Ideal Exercises",
        "16 Hours Of Continuing Education Credits",
      ],
      link: "http://getmpacertified.com/",
    },
    {
      title: "Tumminello Training Templates & Programs (T3P)",
      description:
        "Nick's flagship programming course. The best programming resource for personal trainers—reverse engineering tried-and-true workouts.",
      highlights: [
        "11 Comprehensive Learning Modules",
        "Downloadable Program Templates",
        "Done-for-You Programs (1+ Year of Training)",
        "CEU Credit (19 Hours NASM & ACE)",
      ],
      link: "https://tumminellotemplates.com/",
    },
    {
      title: "Pillars of Power Training",
      description:
        "The most comprehensive system to teach you everything about power training—from basics to programming for every client.",
      highlights: [
        "All Three Pillars of Power Training",
        "Teaching Progressions for Every Client",
        "Tips to Coach Safely & Effectively",
        "Complete Power Training Exercise Library",
      ],
      link: "http://pillarsofpowertraining.com/",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-tight px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mt-3 tracking-wide">
            COURSES
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Digital courses designed to level up your training knowledge and coaching skills.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group border border-foreground/10 rounded-xl p-8 hover:border-primary/40 transition-all duration-300 animate-fade-in flex flex-col"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display tracking-wide text-foreground mb-3">
                {course.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {course.description}
              </p>
              <ul className="space-y-2 mb-8 flex-grow">
                {course.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="lg" asChild className="w-full border-foreground/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary">
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
