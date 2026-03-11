import { GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CoursesPage = () => {
  const courses = [
    {
      title: "Movement Performance Assessment (MPA)",
      description:
        "The Movement Performance Assessment is the first assessment designed specifically for Personal Trainers. You'll learn how to determine which exercises each client should do (or not do) right from the first sessions and start delivering great results without pain.",
      bullets: [
        "7 Movement Tests That Resemble Actual Exercise",
        "Simple And Fast Testing Procedures",
        "Immediate Feedback On Ideal Exercises For Clients",
        "16 Hours Of Continuing Education Credits",
      ],
      learnHow: [
        "Choose which exercises are right (and wrong) for each client",
        "Determine the best lifting movements to use as a starting point",
        "Find a safer and more individualized training direction",
        "Fix faulty movements with a smarter movement prescription system",
        "Assess on the fly in 1-on-1 or group settings",
      ],
      price: "$297",
      link: "https://getmpacertified.com/",
    },
    {
      title: "Tumminello Training Templates and Programs (T3P)",
      description:
        "This is Nick's flagship programming course. T3P is the best programming resource for personal trainers because it not only focuses on real-world training situations, but also expedites the learning process by reverse engineering tried-and-true workouts.",
      bullets: [
        "11 Comprehensive And Practical Learning Modules",
        "Downloadable Program Templates for every client goal",
        "Complete Done-for-You Programs for over a year's worth of training",
        "CEU Credit (19 Hours NASM & ACE)",
        "Instructions on adapting programs to semi-private and small group training settings",
        "Tons of charts, articles, and templates to make program design easy",
      ],
      price: "$299",
      link: "https://tumminellotemplates.com",
    },
    {
      title: "Pillars Of Power Training",
      description:
        "The most comprehensive system designed to teach you everything you need to know about power training. You'll learn the basics of how power training works, the different types of power training exercises, the simple 3-stage coaching progressions, and exactly how to program them for each and every client.",
      bullets: [
        "A complete understanding of why you must include all three pillars of power training",
        "Teaching progressions that allow you to add power training to every client's program",
        "Tips and tricks to coach power training exercises safely and effectively",
        "Complete power training exercise library",
      ],
      price: "$77",
      link: "http://pillarsofpowertraining.com/",
    },
  ];

  return (
    <main className="overflow-hidden">
      <Header />
      <section className="pt-32 pb-20 md:pb-28 bg-foreground min-h-screen">
        <div className="container-tight px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Education
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-background mt-3 tracking-wide">
              ONLINE COURSES
            </h1>
            <p className="text-background/60 mt-4 text-lg max-w-2xl mx-auto">
              Learn from Nick at home with these digital courses
            </p>
          </div>

          {/* Course Cards */}
          <div className="flex flex-col gap-10">
            {courses.map((course, index) => (
              <div
                key={index}
                className="border border-background/10 rounded-xl p-8 md:p-10 hover:border-primary/40 transition-all duration-300 animate-fade-in bg-background/5"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display tracking-wide text-background">
                      {course.title}
                    </h2>
                  </div>
                </div>

                <p className="text-background/70 mb-6 leading-relaxed max-w-3xl">
                  {course.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {course.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-background/80">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* "You'll learn how to" section for MPA */}
                {"learnHow" in course && course.learnHow && (
                  <div className="mb-6 p-5 bg-background/5 rounded-lg border border-background/10">
                    <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
                      You'll learn how to:
                    </p>
                    <ul className="space-y-2">
                      {course.learnHow.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-background/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Price & CTA */}
                <div className="flex items-center gap-6 pt-4 border-t border-background/10">
                  <p className="text-3xl font-display text-primary">{course.price}</p>
                  <Button
                    variant="default"
                    size="lg"
                    asChild
                    className="ml-auto"
                  >
                    <a href={course.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CoursesPage;
