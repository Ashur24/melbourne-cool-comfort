import { Wind, Thermometer, Wrench, Fan, Home, Building2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wind,
    title: "Split System Installation",
    description: "Energy-efficient split systems for single rooms or zones. Perfect for targeted cooling and heating solutions.",
    features: ["All major brands", "Quick installation", "5-year warranty"],
  },
  {
    icon: Home,
    title: "Ducted Systems",
    description: "Whole-home comfort with discreet ducted air conditioning. Climate control for every room from one unit.",
    features: ["Zone control", "Whisper quiet", "Smart thermostat"],
  },
  {
    icon: Thermometer,
    title: "Heating Solutions",
    description: "Stay warm through Melbourne winters with our comprehensive heating services and installations.",
    features: ["Gas heating", "Reverse cycle", "Ducted heating"],
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "Fast, reliable repairs and regular maintenance to keep your system running at peak efficiency.",
    features: ["Same-day service", "All brands serviced", "Preventive care"],
  },
  {
    icon: Fan,
    title: "Evaporative Cooling",
    description: "Eco-friendly evaporative cooling systems perfect for Melbourne's dry summers.",
    features: ["Low running costs", "Fresh air supply", "Easy maintenance"],
  },
  {
    icon: Building2,
    title: "Commercial HVAC",
    description: "Complete commercial air conditioning solutions for offices, retail, and industrial spaces.",
    features: ["Custom design", "VRF systems", "Ongoing support"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-mesh opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-4 text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Complete Heating & Cooling Solutions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From installation to maintenance, we provide comprehensive HVAC services for homes and businesses across Melbourne.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-7 shadow-card hover-lift group cursor-pointer border border-border/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Button variant="secondary" size="lg" className="group" asChild>
            <a href="#contact">
              Discuss Your Project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
