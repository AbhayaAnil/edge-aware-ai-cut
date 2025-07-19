import { Brain, Zap, Layers, Target } from "lucide-react";

const TechBreakdown = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Semantic Segmentation",
      description: "Advanced neural networks trained on millions of images to understand object boundaries with pixel-level precision.",
      features: ["Deep learning models", "Object recognition", "Context awareness"]
    },
    {
      icon: Target,
      title: "Edge Refinement",
      description: "Specialized algorithms that perfect hair, fur, glass, and semi-transparent objects that traditional tools miss.",
      features: ["Hair-perfect detection", "Transparency handling", "Fine detail preservation"]
    },
    {
      icon: Layers,
      title: "Foreground Detection",
      description: "Multi-layer analysis separates subjects from backgrounds with unprecedented accuracy, even in complex scenes.",
      features: ["Multi-object support", "Scene complexity handling", "Depth understanding"]
    },
    {
      icon: Zap,
      title: "Speed Optimization",
      description: "GPU-accelerated processing delivers professional results in under 3 seconds, regardless of image complexity.",
      features: ["GPU acceleration", "Batch processing", "Real-time preview"]
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Brain className="w-4 h-4" />
            Advanced AI Technology
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold">
            How Our AI
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Achieves Perfection
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Four cutting-edge AI technologies work together to deliver results that surpass 
            traditional manual editing and competing automated tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-500 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tech.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {tech.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Number indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-muted/30 rounded-full flex items-center justify-center text-sm font-bold text-muted-foreground">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Stats */}
        <div className="mt-20 bg-gradient-glass backdrop-blur-sm border border-white/10 rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                2.8s
              </div>
              <div className="text-sm text-muted-foreground">Average Processing Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Edge Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                4K
              </div>
              <div className="text-sm text-muted-foreground">Max Resolution</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                50MB
              </div>
              <div className="text-sm text-muted-foreground">Max File Size</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechBreakdown;