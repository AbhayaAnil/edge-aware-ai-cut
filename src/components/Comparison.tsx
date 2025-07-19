import { Check, X, Clock, Target, Zap, DollarSign } from "lucide-react";

const Comparison = () => {
  const competitors = [
    {
      name: "Our AI Tool",
      isOur: true,
      features: {
        speed: "2.8s average",
        accuracy: "99.9% precision",
        easeOfUse: "Drag & drop",
        hairFur: "Perfect detection",
        batchProcessing: "Unlimited",
        pricing: "Free tier available",
        apiAccess: "Full API",
        resolution: "Up to 4K"
      }
    },
    {
      name: "Photoshop",
      isOur: false,
      features: {
        speed: "5-30 minutes",
        accuracy: "Depends on skill",
        easeOfUse: "Complex learning curve",
        hairFur: "Manual refinement needed",
        batchProcessing: "Actions required",
        pricing: "$20.99/month",
        apiAccess: "Limited automation",
        resolution: "No limits"
      }
    },
    {
      name: "Remove.bg",
      isOur: false,
      features: {
        speed: "5-10s",
        accuracy: "85% average",
        easeOfUse: "Simple upload",
        hairFur: "Often misses details",
        batchProcessing: "50 images/month",
        pricing: "$9.99/month",
        apiAccess: "Basic API",
        resolution: "Limited to HD"
      }
    },
    {
      name: "Clipping Magic",
      isOur: false,
      features: {
        speed: "1-5 minutes",
        accuracy: "90% with manual work",
        easeOfUse: "Manual scribbling",
        hairFur: "Requires manual work",
        batchProcessing: "One by one",
        pricing: "$3.99/month",
        apiAccess: "No API",
        resolution: "Up to 4K"
      }
    }
  ];

  const comparisonPoints = [
    { label: "Speed", key: "speed", icon: Clock },
    { label: "Accuracy", key: "accuracy", icon: Target },
    { label: "Ease of Use", key: "easeOfUse", icon: Zap },
    { label: "Hair & Fur", key: "hairFur", icon: Target },
    { label: "Batch Processing", key: "batchProcessing", icon: Zap },
    { label: "Pricing", key: "pricing", icon: DollarSign },
    { label: "API Access", key: "apiAccess", icon: Zap },
    { label: "Max Resolution", key: "resolution", icon: Target },
  ];

  return (
    <section className="py-24 bg-gradient-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Target className="w-4 h-4" />
            See The Difference
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold">
            Why Choose Our
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              AI Solution?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Compare our advanced AI technology against traditional tools and see why 
            professionals choose us for pixel-perfect background removal.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-glow-soft">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                  {competitors.map((competitor) => (
                    <th 
                      key={competitor.name}
                      className={`text-center p-4 font-semibold ${
                        competitor.isOur 
                          ? "text-primary bg-primary/5 rounded-t-xl" 
                          : "text-muted-foreground"
                      }`}
                    >
                      {competitor.name}
                      {competitor.isOur && (
                        <div className="text-xs font-normal text-primary/70 mt-1">
                          Recommended
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((point, index) => (
                  <tr 
                    key={point.key}
                    className={`border-b border-border/20 ${
                      index % 2 === 0 ? "bg-muted/20" : ""
                    }`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <point.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium text-foreground">{point.label}</span>
                      </div>
                    </td>
                    {competitors.map((competitor) => (
                      <td 
                        key={competitor.name}
                        className={`text-center p-4 ${
                          competitor.isOur ? "bg-primary/5" : ""
                        }`}
                      >
                        <span className={`${
                          competitor.isOur 
                            ? "text-primary font-semibold" 
                            : "text-muted-foreground"
                        }`}>
                          {competitor.features[point.key as keyof typeof competitor.features]}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="lg:hidden space-y-6">
          {competitors.map((competitor) => (
            <div 
              key={competitor.name}
              className={`bg-card/50 backdrop-blur-sm border rounded-2xl p-6 ${
                competitor.isOur 
                  ? "border-primary/50 shadow-glow-primary" 
                  : "border-border/50"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-xl font-bold ${
                  competitor.isOur ? "text-primary" : "text-foreground"
                }`}>
                  {competitor.name}
                </h3>
                {competitor.isOur && (
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                )}
              </div>
              
              <div className="space-y-4">
                {comparisonPoints.map((point) => (
                  <div key={point.key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <point.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{point.label}</span>
                    </div>
                    <span className={`text-sm ${
                      competitor.isOur ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}>
                      {competitor.features[point.key as keyof typeof competitor.features]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-glass backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary" />
              No credit card required
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary" />
              Free tier available
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary" />
              Instant results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;