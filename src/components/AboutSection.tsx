import { CheckCircle, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "5000+", label: "Happy Customers" },
  { number: "24/7", label: "Emergency Service" },
  { number: "100%", label: "Satisfaction" },
];

const reasons = [
  "Family owned and operated Melbourne business",
  "Fully licensed, insured, and certified technicians",
  "Upfront pricing with no hidden costs",
  "Same-day and emergency service available",
  "Premium brands at competitive prices",
  "Interest-free payment plans available",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-secondary font-semibold mb-4 text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Melbourne's Most Trusted Air Conditioning Experts
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              For over 15 years, Ash Air Solutions has been keeping Melbourne homes and businesses comfortable. We're a local, family-owned company committed to exceptional service and quality workmanship.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Our team of fully qualified technicians are experts in all major brands and types of heating and cooling systems. From a simple split system to complex commercial installations, we deliver outstanding results every time.
            </p>

            {/* Reasons List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" className="group" asChild>
              <a href="#contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-primary rounded-2xl p-8 text-center hover-lift"
              >
                <div className="text-4xl sm:text-5xl font-heading font-extrabold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/70 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
            
            {/* Additional card */}
            <div className="col-span-2 bg-gradient-accent rounded-2xl p-7 flex items-center gap-5 hover-lift">
              <div className="w-16 h-16 bg-accent-foreground/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-accent-foreground text-xl mb-1">Government Rebates Available</h4>
                <p className="text-accent-foreground/80 text-sm">Save up to $1,000 on eligible systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
