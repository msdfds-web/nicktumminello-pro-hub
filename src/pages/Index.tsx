import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Accolades from "@/components/Accolades";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
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
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
