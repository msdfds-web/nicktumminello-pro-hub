import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "https://ntloop.com", label: "NT Loop", external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-background/10">
      <div className="container-tight">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <a href="/" className="text-lg font-bold text-background">
            Nick<span className="text-primary">T</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-background"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden py-4 px-6 border-t border-background/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="sm" asChild className="mt-2">
                <a href="#contact" onClick={() => setIsOpen(false)}>Get Started</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
