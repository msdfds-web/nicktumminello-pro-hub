const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-background/10">
      <div className="container-tight py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Name */}
          <p className="text-2xl font-display tracking-wider text-background">
            NICK<span className="text-primary">T</span>
          </p>

          {/* Links */}
          <nav className="flex gap-8 text-sm">
            <a href="#about" className="text-background/60 hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-background/60 hover:text-primary transition-colors">Services</a>
            <a href="https://ntloop.com" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors">NT Loop</a>
            <a href="#contact" className="text-background/60 hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <a href="tel:5615011397" className="text-background/60 hover:text-primary transition-colors">561-501-1397</a>
            <a href="mailto:info@nicktumminello.com" className="text-background/60 hover:text-primary transition-colors">info@nicktumminello.com</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Nick Tumminello. All rights reserved.
          </p>
          <p className="text-background/40 text-sm">
            Powered by <a href="https://dadadig.com" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-primary/80 transition-colors">DADA</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
