import { Button } from "@/components/ui/button";
import { Shield, Clock, DollarSign, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-ac.jpg";

const trustBadges = [
  { icon: Shield, text: "Fully Licensed & Insured", subtext: "AU License #12345" },
  { icon: Clock, text: "Melbourne-Based", subtext: "Same Day Service" },
  { icon: DollarSign, text: "Upfront Pricing", subtext: "No Hidden Fees" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional air conditioning installation in Melbourne home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6 animate-fade-in backdrop-blur-sm">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Melbourne's Trusted HVAC Experts</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Premium Air Conditioning{" "}
            <span className="text-secondary">Installation & Service</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Keep your home comfortable year-round with Melbourne's leading heating and cooling specialists. From split systems to ducted solutions, we've got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Book a Free Quote</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:0412345678">Call 0412 345 678</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground text-sm">{badge.text}</p>
                  <p className="text-primary-foreground/60 text-xs">{badge.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
