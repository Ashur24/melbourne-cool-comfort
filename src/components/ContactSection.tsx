import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "0417 066 737", href: "tel:0417066737" },
  { icon: Mail, label: "Email", value: "admin@ashairsolutions.com", href: "mailto:admin@ashairsolutions.com" },
  { icon: MapPin, label: "Service Area", value: "All Melbourne Metro", href: null },
  { icon: Clock, label: "Hours", value: "Mon-Sat: 7am-5pm", href: null },
];

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-mesh opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="inline-block text-secondary font-semibold mb-4 text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ready for a More Comfortable Home?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Contact us today for a free, no-obligation quote. Our friendly team is ready to help with all your heating and cooling needs.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-card rounded-2xl p-5 flex items-center gap-4 shadow-card hover-lift border border-border/50">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-foreground hover:text-secondary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Banner */}
            <div className="bg-gradient-accent rounded-2xl p-7 text-accent-foreground">
              <h4 className="font-heading font-bold text-xl mb-2">24/7 Emergency Service</h4>
              <p className="text-accent-foreground/80 mb-5 leading-relaxed">
                AC broken on a hot day? We offer same-day emergency repairs across Melbourne.
              </p>
              <Button variant="default" size="lg" className="bg-accent-foreground/20 hover:bg-accent-foreground/30 text-accent-foreground border-0" asChild>
                <a href="tel:0412345678" className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-lg-custom border border-border/50">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-7">Request a Free Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    placeholder="Your phone"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="split">Split System Installation</option>
                  <option value="ducted">Ducted System</option>
                  <option value="repair">Repair & Maintenance</option>
                  <option value="heating">Heating</option>
                  <option value="commercial">Commercial HVAC</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
