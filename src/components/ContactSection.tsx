import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "0412 345 678", href: "tel:0412345678" },
  { icon: Mail, label: "Email", value: "info@melbournecooling.com.au", href: "mailto:info@melbournecooling.com.au" },
  { icon: MapPin, label: "Service Area", value: "All Melbourne Metro", href: null },
  { icon: Clock, label: "Hours", value: "Mon-Sat: 7am-6pm", href: null },
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
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <span className="inline-block text-secondary font-semibold mb-3">Get In Touch</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready for a More Comfortable Home?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us today for a free, no-obligation quote. Our friendly team is ready to help with all your heating and cooling needs.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-4 flex items-center gap-3 shadow-card">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
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
            <div className="bg-secondary rounded-xl p-6 text-secondary-foreground">
              <h4 className="font-heading font-bold text-xl mb-2">24/7 Emergency Service</h4>
              <p className="text-secondary-foreground/80 mb-4">
                AC broken on a hot day? We offer same-day emergency repairs across Melbourne.
              </p>
              <Button variant="default" size="lg" asChild>
                <a href="tel:0412345678" className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Request a Free Quote</h3>
            
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
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
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
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
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
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
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
