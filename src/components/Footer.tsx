const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-background/10">
      <div className="container-tight py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo/Name */}
          <div>
            <p className="text-lg font-bold text-background">Nick Tumminello</p>
            <p className="text-background/50 text-sm">Performance University International</p>
          </div>

          {/* Links */}
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="text-background/60 hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-background/60 hover:text-primary transition-colors">Services</a>
            <a href="https://ntloop.com" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors">NT Loop</a>
            <a href="#contact" className="text-background/60 hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} Nick Tumminello. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
