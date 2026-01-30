const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-tight py-8 md:py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo/Name */}
          <div>
            <p className="text-lg font-bold text-foreground">Nick Tumminello</p>
            <p className="text-muted-foreground text-sm">Performance University International</p>
          </div>

          {/* Links */}
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="https://ntloop.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">NT Loop</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Nick Tumminello. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
