import { Code, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const APISection = () => {
  const codeExample = `// Remove background with our REST API
const response = await fetch('https://api.bgremover.ai/v1/remove', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    image_url: 'https://example.com/image.jpg',
    format: 'png',
    resolution: '4k'
  })
});

const result = await response.json();
console.log(result.processed_image_url);
// Returns: clean image with transparent background`;

  const integrations = [
    {
      name: "Shopify",
      description: "Automatically process product images for your store",
      icon: "🛍️"
    },
    {
      name: "WooCommerce", 
      description: "Seamless WordPress e-commerce integration",
      icon: "🛒"
    },
    {
      name: "Canva",
      description: "Enhance your design workflow with our API",
      icon: "🎨"
    },
    {
      name: "Adobe Creative",
      description: "Plugin support for Creative Suite applications",
      icon: "📐"
    },
    {
      name: "Zapier",
      description: "Connect with 5000+ apps through automation",
      icon: "⚡"
    },
    {
      name: "Custom Apps",
      description: "Build your own integration with our RESTful API",
      icon: "⚙️"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process images in under 3 seconds with our optimized infrastructure"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption for all API calls"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "99.9% uptime with servers worldwide for optimal performance"
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Comprehensive documentation with SDKs for all major languages"
    }
  ];

  return (
    <section className="py-24 bg-gradient-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Code className="w-4 h-4" />
            Developer API
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold">
            Integrate Our AI
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Into Your Apps
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful REST API that scales with your business. From single requests 
            to millions of images, our infrastructure handles it all.
          </p>
        </div>

        {/* Code Example */}
        <div className="mb-20">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-glow-soft">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Simple API Integration</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-foreground whitespace-pre-wrap">
                <code>{codeExample}</code>
              </pre>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-4">
                <Button variant="hero" size="sm">
                  <Code className="w-4 h-4" />
                  View Full Docs
                </Button>
                <Button variant="ghost" size="sm">
                  Try in Playground
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                Response time: 2.3s average
              </div>
            </div>
          </div>
        </div>

        {/* API Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="text-center space-y-4 group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              Ready-Made Integrations
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with popular platforms or build custom integrations using our flexible API
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => (
              <div 
                key={integration.name}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{integration.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{integration.name}</h4>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* API Stats */}
        <div className="mt-20 bg-gradient-glass backdrop-blur-sm border border-white/10 rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">API Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                50ms
              </div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                10M+
              </div>
              <div className="text-sm text-muted-foreground">API Calls/Month</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Developer Support</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            Ready to integrate our AI?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started with our comprehensive documentation and start processing images in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Code className="w-5 h-5" />
              Get API Key
            </Button>
            <Button variant="ghost" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APISection;