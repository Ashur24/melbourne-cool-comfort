const brands = [
  { name: "Daikin", className: "font-bold" },
  { name: "Mitsubishi Electric", className: "font-bold" },
  { name: "Fujitsu", className: "font-bold" },
  { name: "Panasonic", className: "font-bold" },
  { name: "LG", className: "font-black" },
  { name: "Samsung", className: "font-bold" },
  { name: "Carrier", className: "font-bold" },
  { name: "Toshiba", className: "font-bold" },
  { name: "Hitachi", className: "font-bold" },
  { name: "Actron Air", className: "font-bold" },
  { name: "Brivis", className: "font-bold" },
  { name: "Rinnai", className: "font-bold" },
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
              <span className={`text-2xl md:text-3xl text-foreground/70 hover:text-primary transition-colors duration-300 whitespace-nowrap ${brand.className}`}>
                {brand.name}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <span className={`text-2xl md:text-3xl text-foreground/70 hover:text-primary transition-colors duration-300 whitespace-nowrap ${brand.className}`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
