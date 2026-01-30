import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import Services from "@/components/Services";
import NTLoop from "@/components/NTLoop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <SocialProof />
      <About />
      <Services />
      <NTLoop />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
