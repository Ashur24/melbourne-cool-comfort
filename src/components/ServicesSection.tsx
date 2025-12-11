import { Wind, Thermometer, Wrench, Fan, Home, Building2 } from "lucide-react";
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
    features: ["Gas heating", "Reverse cycle", "Hydronic systems"],
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
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-3">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Complete Heating & Cooling Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From installation to maintenance, we provide comprehensive HVAC services for homes and businesses across Melbourne.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" asChild>
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
