import { Check, Zap, Crown, Code, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out our AI technology",
      icon: Zap,
      price: { monthly: 0, yearly: 0 },
      originalPrice: null,
      features: [
        "5 images per month",
        "Up to 1080p resolution", 
        "Basic background removal",
        "PNG download",
        "Watermark on images",
        "Email support"
      ],
      limitations: [
        "Limited resolution",
        "Watermarked results",
        "5 image monthly limit"
      ],
      cta: "Get Started Free",
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      description: "For professionals and small businesses",
      icon: Star,
      price: { monthly: 19, yearly: 190 },
      originalPrice: { monthly: 29, yearly: 348 },
      features: [
        "500 images per month",
        "Up to 4K resolution",
        "Advanced AI processing",
        "Multiple format downloads",
        "No watermarks",
        "Batch processing (up to 50)",
        "Priority processing",
        "24/7 chat support",
        "Commercial license"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true,
      color: "from-primary to-cyan-600"
    },
    {
      name: "Developer",
      description: "Full API access and team features",
      icon: Code,
      price: { monthly: 99, yearly: 990 },
      originalPrice: { monthly: 149, yearly: 1788 },
      features: [
        "10,000 images per month",
        "Full REST API access",
        "Webhook integrations",
        "Team management (10 users)",
        "Custom background options",
        "Bulk processing (unlimited)",
        "99.9% uptime SLA",
        "Dedicated account manager",
        "Priority feature requests"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const enterprise = {
    title: "Enterprise",
    description: "Custom solutions for large organizations",
    features: [
      "Unlimited image processing",
      "On-premise deployment options", 
      "Custom AI model training",
      "Advanced security & compliance",
      "24/7 phone support",
      "Custom integrations",
      "SLA guarantees",
      "Training & onboarding"
    ]
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Crown className="w-4 h-4" />
            Simple, Transparent Pricing
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold">
            Choose Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start free, upgrade as you grow. All plans include our industry-leading 
            AI technology with pixel-perfect results.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? "bg-primary" : "bg-muted"
            }`}
          >
            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
              isYearly ? "translate-x-8" : "translate-x-1"
            }`} />
          </button>
          <span className={`font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
              Save 40%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-card/50 backdrop-blur-sm border rounded-3xl p-8 hover:shadow-glow-soft transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? "border-primary/50 shadow-glow-primary scale-105" 
                  : "border-border/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center space-y-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-foreground">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-muted-foreground">
                        /{isYearly ? "year" : "month"}
                      </span>
                    )}
                  </div>
                  
                  {plan.originalPrice && (
                    <div className="text-sm text-muted-foreground">
                      <span className="line-through">
                        ${isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly}
                        /{isYearly ? "year" : "month"}
                      </span>
                      <span className="ml-2 text-primary font-semibold">
                        Save {Math.round((1 - (isYearly ? plan.price.yearly : plan.price.monthly) / (isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly)) * 100)}%
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>

              {/* Free trial note */}
              {plan.name !== "Free" && (
                <p className="text-center text-xs text-muted-foreground mt-4">
                  14-day free trial • No credit card required
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="bg-gradient-glass backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{enterprise.title}</h3>
                  <p className="text-lg text-muted-foreground">{enterprise.description}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {enterprise.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Contact Sales
                </Button>
                <Button variant="ghost" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6">
                <h4 className="font-semibold text-foreground mb-4">What's included:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="text-muted-foreground">Volume pricing</div>
                    <div className="text-muted-foreground">Custom SLAs</div>
                    <div className="text-muted-foreground">Dedicated support</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-muted-foreground">On-premise options</div>
                    <div className="text-muted-foreground">Custom integrations</div>
                    <div className="text-muted-foreground">Training included</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center bg-primary/5 border border-primary/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">Custom Pricing</div>
                <div className="text-sm text-muted-foreground">Based on your specific needs</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes, upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers."
              },
              {
                q: "Is there a free trial?",
                a: "Yes! All paid plans include a 14-day free trial with full access to features."
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 30-day money-back guarantee if you're not completely satisfied."
              }
            ].map((faq) => (
              <div key={faq.q} className="text-left bg-card/30 border border-border/30 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;