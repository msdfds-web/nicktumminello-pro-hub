import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Accolades from "@/components/Accolades";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Courses from "@/components/Courses";
import Services from "@/components/Services";
import Publications from "@/components/Publications";
import NTLoop from "@/components/NTLoop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Accolades />
      <About />
      <Philosophy />
      <Courses />
      <SocialProof />
      <Services />
      <Publications />
      <NTLoop />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
