import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Hawthorn",
    rating: 5,
    text: "Excellent service from start to finish. The team installed our new ducted system quickly and professionally. Our home has never been more comfortable!",
    service: "Ducted Installation",
  },
  {
    name: "James Thompson",
    location: "Brighton",
    rating: 5,
    text: "Called for an emergency repair on a 40-degree day and they were at my door within 2 hours. Fixed the issue quickly and at a fair price. Highly recommend!",
    service: "Emergency Repair",
  },
  {
    name: "Lisa Chen",
    location: "Richmond",
    rating: 5,
    text: "Very professional team. They took the time to explain all my options and helped me choose the perfect split system for my apartment. Great follow-up service too.",
    service: "Split System",
  },
  {
    name: "Mark Davidson",
    location: "South Yarra",
    rating: 5,
    text: "We've used Melbourne Cooling for our office HVAC needs for years. Reliable, efficient, and always professional. Wouldn't go anywhere else.",
    service: "Commercial HVAC",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-3">Testimonials</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Don't just take our word for it. Here's what Melbourne homeowners have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-secondary/50 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-foreground/90 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                  <p className="text-primary-foreground/60 text-sm">{testimonial.location}</p>
                </div>
                <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-6 py-3 rounded-full">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-primary-foreground font-semibold">4.9/5</span>
            <span className="text-primary-foreground/60">from 200+ Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
