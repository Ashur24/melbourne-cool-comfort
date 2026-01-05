import fujitsuLogo from "@/assets/brands/fujitsu.webp";
import carrierLogo from "@/assets/brands/carrier.webp";
import hisenseLogo from "@/assets/brands/hisense.webp";
import daikinLogo from "@/assets/brands/daikin.jpg";
import mideaLogo from "@/assets/brands/midea.jpg";
import mitsubishiHeavyLogo from "@/assets/brands/mitsubishi-heavy.png";
import mitsubishiElectricLogo from "@/assets/brands/mitsubishi-electric.jpg";

const brands = [
  { name: "Daikin", logo: daikinLogo },
  { name: "Mitsubishi Electric", logo: mitsubishiElectricLogo },
  { name: "Mitsubishi Heavy Industries", logo: mitsubishiHeavyLogo },
  { name: "Fujitsu", logo: fujitsuLogo },
  { name: "Carrier", logo: carrierLogo },
  { name: "Hisense", logo: hisenseLogo },
  { name: "Midea", logo: mideaLogo },
];

export function BrandsSection() {
  return (
    <section className="py-12 bg-muted/50 border-y border-border/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-wider">
          Trusted Partner of Leading Brands
        </p>
      </div>
      
      {/* Infinite scroll container */}
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/50 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
