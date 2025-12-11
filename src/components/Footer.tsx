import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const services = [
  "Split System Installation",
  "Ducted Air Conditioning",
  "Heating Solutions",
  "Repairs & Maintenance",
  "Evaporative Cooling",
  "Commercial HVAC",
];

const areas = [
  "Melbourne CBD",
  "Eastern Suburbs",
  "Western Suburbs",
  "Northern Suburbs",
  "Southern Suburbs",
  "Mornington Peninsula",
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-secondary-foreground">MC</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg">Melbourne</span>
                <span className="font-heading font-bold text-lg text-secondary"> Cooling</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 text-sm">
              Melbourne's trusted air conditioning experts. Keeping homes and businesses comfortable for over 15 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {areas.map((area, index) => (
                <li key={index} className="text-primary-foreground/70 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:0412345678" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                0412 345 678
              </a>
              <a href="mailto:info@melbournecooling.com.au" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@melbournecooling.com.au
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                Servicing all Melbourne Metro areas
              </div>
            </div>

            {/* License */}
            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <p className="text-xs text-primary-foreground/60">Licensed & Insured</p>
              <p className="text-sm font-semibold">AU License #12345</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Melbourne Cooling. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
