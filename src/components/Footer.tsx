import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.jpg";

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
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-5">
              <img src={logo} alt="Ash Air Solutions" className="h-12 w-auto bg-primary-foreground rounded-xl p-2" />
            </div>
            <p className="text-primary-foreground/60 mb-6 text-sm leading-relaxed">
              Melbourne's trusted air conditioning experts. Keeping homes and businesses comfortable for over 15 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Service Areas</h4>
            <ul className="space-y-3">
              {areas.map((area, index) => (
                <li key={index} className="text-primary-foreground/60 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:0417066737" className="flex items-center gap-3 text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                0417 066 737
              </a>
              <a href="mailto:admin@ashairsolutions.com" className="flex items-center gap-3 text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                admin@ashairsolutions.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Servicing all Melbourne Metro areas
              </div>
            </div>

            {/* License */}
            <div className="mt-6 p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/50 mb-1">Licensed & Insured</p>
              <p className="text-sm font-semibold">AU License #12345</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {new Date().getFullYear()} Ash Air Solutions. All rights reserved.</p>
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
