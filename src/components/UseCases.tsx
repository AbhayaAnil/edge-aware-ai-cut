import { ShoppingBag, Camera, Users, Palette, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import demoImages from "@/assets/demo-images.jpg";

const UseCases = () => {
  const useCases = [
    {
      icon: ShoppingBag,
      title: "E-commerce",
      description: "Perfect for Amazon, Shopify, and Etsy sellers who need consistent product photography with clean backgrounds.",
      stats: "Increase sales by 40%",
      examples: ["Product catalogs", "Marketplace listings", "Social commerce"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Camera,
      title: "Product Photography",
      description: "Professional studios use our AI to speed up workflow and deliver consistent results for client catalogs.",
      stats: "Save 85% editing time",
      examples: ["Studio photography", "Catalog shoots", "Brand imagery"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Portrait Retouching",
      description: "Perfect headshots and professional portraits with clean backgrounds for corporate and personal use.",
      stats: "99.8% hair accuracy",
      examples: ["LinkedIn headshots", "Team photos", "Personal branding"],
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Designers love how quickly they can extract subjects for compositions, mockups, and creative projects.",
      stats: "10x faster workflow",
      examples: ["Marketing materials", "Social media", "Print design"],
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "Social Media Marketing",
      description: "Create scroll-stopping content with perfectly cut-out subjects on custom backgrounds for maximum engagement.",
      stats: "3x more engagement",
      examples: ["Instagram posts", "Facebook ads", "YouTube thumbnails"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Web Thumbnails",
      description: "Clean, professional thumbnails that stand out in search results and drive higher click-through rates.",
      stats: "45% higher CTR",
      examples: ["Blog thumbnails", "Video previews", "Course imagery"],
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            Real-World Applications
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold">
            Trusted by Professionals
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Across Industries
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From solo entrepreneurs to Fortune 500 companies, our AI background removal 
            tool powers success across diverse industries and use cases.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-500 hover:scale-105"
            >
              {/* Icon with gradient background */}
              <div className="mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                  <div className="text-primary font-semibold text-sm">
                    {useCase.stats}
                  </div>
                </div>

                {/* Examples */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Common uses:</div>
                  <ul className="space-y-1">
                    {useCase.examples.map((example) => (
                      <li key={example} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story Showcase */}
        <div className="bg-gradient-glass backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  Real Results from Real Businesses
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  See how our AI transforms workflows and delivers measurable results 
                  for businesses of all sizes.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    2.3s
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average processing time for 4K images
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    40%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average increase in conversion rates
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    85%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Reduction in editing time
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    500K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Images processed monthly
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Start Your Success Story
              </Button>
            </div>

            <div className="relative">
              <img 
                src={demoImages} 
                alt="Professional results showcase"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">Batch Processing Complete</div>
                      <div className="text-sm text-muted-foreground">24 images • 99.9% accuracy</div>
                    </div>
                    <div className="text-primary font-bold">47s total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;