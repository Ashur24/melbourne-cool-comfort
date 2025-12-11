import { CheckCircle, Users, Award, ThumbsUp } from "lucide-react";
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-secondary font-semibold mb-3">About Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Melbourne's Most Trusted Air Conditioning Experts
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              For over 15 years, Melbourne Cooling has been keeping Melbourne homes and businesses comfortable. We're a local, family-owned company committed to exceptional service and quality workmanship.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of fully qualified technicians are experts in all major brands and types of heating and cooling systems. From a simple split system to complex commercial installations, we deliver outstanding results every time.
            </p>

            {/* Reasons List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{reason}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <a href="#contact">Learn More About Us</a>
            </Button>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-primary rounded-2xl p-6 text-center text-primary-foreground"
              >
                <div className="text-4xl sm:text-5xl font-heading font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
            
            {/* Additional card */}
            <div className="col-span-2 bg-secondary rounded-2xl p-6 flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-secondary-foreground text-lg">Government Rebates Available</h4>
                <p className="text-secondary-foreground/80 text-sm">Save up to $1,000 on eligible systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
