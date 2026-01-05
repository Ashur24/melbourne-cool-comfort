import { Star, Quote } from "lucide-react";
const testimonials = [{
  name: "Sarah Mitchell",
  location: "Hawthorn",
  rating: 5,
  text: "Excellent service from start to finish. The team installed our new ducted system quickly and professionally. Our home has never been more comfortable!",
  service: "Ducted Installation"
}, {
  name: "James Thompson",
  location: "Brighton",
  rating: 5,
  text: "Called for an emergency repair on a 40-degree day and they were at my door within 2 hours. Fixed the issue quickly and at a fair price. Highly recommend!",
  service: "Emergency Repair"
}, {
  name: "Lisa Chen",
  location: "Richmond",
  rating: 5,
  text: "Very professional team. They took the time to explain all my options and helped me choose the perfect split system for my apartment. Great follow-up service too.",
  service: "Split System"
}, {
  name: "Mark Davidson",
  location: "South Yarra",
  rating: 5,
  text: "We've used Ash Air Solutions for our office HVAC needs for years. Reliable, efficient, and always professional. Wouldn't go anywhere else.",
  service: "Commercial HVAC"
}];
export function TestimonialsSection() {
  return <section id="testimonials" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-4 text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">
            Don't just take our word for it. Here's what Melbourne homeowners have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => <div key={index} className="glass-dark rounded-2xl p-7 hover-lift">
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-secondary/30 mb-5" />

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}
              </div>

              {/* Text */}
              <p className="text-primary-foreground/85 mb-7 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                  <p className="text-primary-foreground/50 text-sm">{testimonial.location}</p>
                </div>
                <span className="text-xs bg-secondary/15 text-secondary px-4 py-1.5 rounded-full font-medium">
                  {testimonial.service}
                </span>
              </div>
            </div>)}
        </div>

        {/* Google Rating */}
        <div className="mt-14 text-center">
          
        </div>
      </div>
    </section>;
}