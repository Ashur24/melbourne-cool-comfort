import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0412345678" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span>0412 345 678</span>
            </a>
            <a href="mailto:info@melbourneac.com.au" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@melbourneac.com.au</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Servicing All Melbourne Metro Areas</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-card/95 backdrop-blur-md shadow-card" : "bg-card"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">MC</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-heading font-bold text-xl text-foreground">Melbourne</span>
                <span className="font-heading font-bold text-xl text-secondary"> Cooling</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-foreground/80 hover:text-secondary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Get Free Quote</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-slide-up">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-medium text-foreground/80 hover:text-secondary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="hero" size="lg" className="mt-2" asChild>
                  <a href="#contact">Get Free Quote</a>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
