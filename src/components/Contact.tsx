import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [frequency, setFrequency] = useState("");
  const [availability, setAvailability] = useState("");
  const [injuries, setInjuries] = useState("");
  const [currentWorkouts, setCurrentWorkouts] = useState("");

  const inputClass = "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground";
  const textareaClass = `${inputClass} resize-none`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Training Application");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n1. Main reason for training:\n${reason}\n\n2. How often looking to train:\n${frequency}\n\n3. Preferred days/time frames:\n${availability}\n\n4. Pain or injuries:\n${injuries}\n\n5. Current workouts/sports:\n${currentWorkouts}`
    );
    window.location.href = `mailto:info@nicktumminello.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative section-padding bg-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground pointer-events-none" />
      <div className="container-tight relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <span className="text-primary-foreground/80 font-semibold text-sm tracking-wider uppercase">WANT TO TRAIN WITH ONE OF THE WORLD'S BEST PERSONAL TRAINERS?</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground mt-3 mb-6 tracking-wide">BECOME A CLIENT</h2>
          <p className="text-primary-foreground/80 mb-10 text-lg">If you're an active adult that's been working out semi-regularly and wants to get
stronger safely and keep performing the sports and activities you love to your
best potential, then you're the perfect fit.
          </p>

          {/* Application Info Box */}
          <div className="mb-10 p-6 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-left space-y-3">
            <p className="text-primary-foreground font-semibold text-base">
              This application is for One-On-One training with Coach Nick Tumminello at Gravity + Oxygen Fitness.
            </p>
            <div className="flex items-start gap-2 text-primary-foreground/80 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>199 W Palmetto Park Rd. Boca Raton, FL 33432</span>
            </div>
            <p className="text-primary-foreground/70 text-sm italic">
              Rates will be provided upon response to your application.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClass}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={inputClass}
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="space-y-1">
              <label className="text-primary-foreground/90 text-sm font-medium">1. What is the main reason you're looking to train with me?</label>
              <Textarea value={reason} onChange={(e) => setReason(e.target.value)} rows={3} required className={textareaClass} />
            </div>
            <div className="space-y-1">
              <label className="text-primary-foreground/90 text-sm font-medium">2. How often are you looking to train with me?</label>
              <Textarea value={frequency} onChange={(e) => setFrequency(e.target.value)} rows={2} required className={textareaClass} />
            </div>
            <div className="space-y-1">
              <label className="text-primary-foreground/90 text-sm font-medium">3. What days and time frames are you looking to train with me?</label>
              <Textarea value={availability} onChange={(e) => setAvailability(e.target.value)} rows={2} required className={textareaClass} />
            </div>
            <div className="space-y-1">
              <label className="text-primary-foreground/90 text-sm font-medium">4. Please describe any pain or injuries, and if they interfere with your exercise or sports activities.</label>
              <Textarea value={injuries} onChange={(e) => setInjuries(e.target.value)} rows={3} required className={textareaClass} />
            </div>
            <div className="space-y-1">
              <label className="text-primary-foreground/90 text-sm font-medium">5. What are you currently doing for workouts and sports? Please provide an overview of your typical workouts.</label>
              <Textarea value={currentWorkouts} onChange={(e) => setCurrentWorkouts(e.target.value)} rows={3} required className={textareaClass} />
            </div>

            <Button variant="dark" size="xl" type="submit" className="w-full">
              Submit Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;