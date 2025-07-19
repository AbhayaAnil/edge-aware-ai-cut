import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "E-commerce Director",
      company: "StyleHub Fashion",
      image: "photo-1494790108755-2616b612b786",
      rating: 5,
      quote: "This AI tool revolutionized our product photography workflow. We went from spending 2 hours per product to 2 minutes. The hair and fabric edge detection is absolutely perfect - better than our professional retouchers.",
      metric: "300% faster workflow"
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director", 
      company: "Pixel Perfect Agency",
      image: "photo-1472099645785-5658abf4ff4e",
      rating: 5,
      quote: "As someone who's used Photoshop for 15 years, I was skeptical. But this AI consistently delivers results that would take me 30 minutes in just seconds. My clients are amazed by the turnaround time.",
      metric: "99.8% client satisfaction"
    },
    {
      name: "Jennifer Park",
      role: "Social Media Manager",
      company: "BrandBoost Marketing",
      image: "photo-1438761681033-6461ffad8d80",
      rating: 5,
      quote: "Game changer for social media content creation. The batch processing feature lets me prepare hundreds of images for campaigns in minutes. Our engagement rates increased 40% with the cleaner, more professional look.",
      metric: "40% higher engagement"
    },
    {
      name: "David Thompson",
      role: "Product Photographer",
      company: "Studio Thompson",
      image: "photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      quote: "I've tested every background removal tool on the market. This AI's precision with complex textures like fur, glass, and hair is unmatched. It's become an essential part of my studio workflow.",
      metric: "85% time savings"
    },
    {
      name: "Lisa Wang",
      role: "UX Designer",
      company: "TechFlow Solutions", 
      image: "photo-1544005313-94ddf0286df2",
      rating: 5,
      quote: "Perfect for creating clean mockups and user interface assets. The API integration was seamless, and now our design system automatically generates product images with consistent backgrounds.",
      metric: "Seamless API integration"
    }
  ];

  const stats = [
    { label: "Average Rating", value: "4.9/5", detail: "Based on 12,000+ reviews" },
    { label: "Customer Retention", value: "94%", detail: "Users stick with us" },
    { label: "Processing Accuracy", value: "99.9%", detail: "Pixel-perfect results" },
    { label: "Support Response", value: "<30min", detail: "Average response time" }
  ];

  return (
    <section className="py-24 bg-gradient-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            Customer Success Stories
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold">
            Loved by
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Professionals Worldwide
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of designers, photographers, and businesses who've transformed 
            their workflow with our AI-powered background removal.
          </p>
        </div>

        {/* Customer Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-500 hover:scale-105 ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={`https://images.unsplash.com/${testimonial.image}?w=60&h=60&fit=crop&crop=face`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-primary/30" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Metric */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                <div className="text-primary font-semibold text-sm">
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center space-y-8">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Trusted by leading brands and agencies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "Adobe Creative", "Shopify Plus", "Amazon Seller", "Etsy Pro", 
              "WooCommerce", "BigCommerce", "Canva Pro", "Figma Teams"
            ].map((company, index) => (
              <div 
                key={company}
                className="flex items-center justify-center h-12 text-muted-foreground font-medium text-sm"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Banner */}
        <div className="mt-16 bg-gradient-glass backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-foreground font-semibold">4.9/5 rating</span>
            </div>
            <p className="text-muted-foreground">
              Join 12,000+ satisfied customers who've already transformed their workflow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;