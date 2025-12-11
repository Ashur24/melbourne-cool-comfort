import { Button } from "@/components/ui/button";
import { Shield, Clock, DollarSign, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ac.jpg";

const trustBadges = [
  { icon: Shield, text: "Fully Licensed & Insured", subtext: "AU License #12345" },
  { icon: Clock, text: "Melbourne-Based", subtext: "Same Day Service" },
  { icon: DollarSign, text: "Upfront Pricing", subtext: "No Hidden Fees" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional air conditioning installation in Melbourne home"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-mesh opacity-60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-secondary/15 text-secondary px-5 py-2.5 rounded-full mb-8 animate-fade-up backdrop-blur-md border border-secondary/20"
          >
            <CheckCircle className="w-4 h-4" />
            <span className="font-medium text-sm">Melbourne's Trusted HVAC Experts</span>
          </div>

          {/* Heading */}
          <h1 
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground mb-6 leading-[1.1] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Premium Air Conditioning{" "}
            <span className="text-secondary">Installation & Service</span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg sm:text-xl text-primary-foreground/75 mb-10 leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Keep your home comfortable year-round with Melbourne's leading heating and cooling specialists. From split systems to ducted solutions, we've got you covered.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#contact">
                Book a Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:0412345678">Call 0412 345 678</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-4 flex items-center gap-4 hover-lift"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground text-sm">{badge.text}</p>
                  <p className="text-primary-foreground/50 text-xs">{badge.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-primary-foreground/40 text-xs font-medium uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-secondary rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
