import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Zap, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg-removal.jpg";

const Hero = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Next-Gen AI Technology
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Remove Backgrounds
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Instantly
                </span>
                <span className="block text-4xl lg:text-5xl text-muted-foreground font-normal">
                  with Pixel-Perfect AI
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Upload any image. Get a clean, transparent cutout in under 3 seconds. 
                Built for e-commerce, design, and marketing professionals who demand precision.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "HD/4K Support",
                "Complex Edges",
                "Hair & Fur Perfect",
                "Batch Processing"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" className="group">
                <Upload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Try It Free Now
              </Button>
              <Button variant="ghost" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500K+</div>
                <div className="text-sm text-muted-foreground">Images Processed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2.8s</div>
                <div className="text-sm text-muted-foreground">Avg Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Edge Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Column - Upload Area */}
          <div className="relative">
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-glow-soft">
              {/* Upload Zone */}
              <div
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                  dragActive
                    ? "border-primary bg-primary/5 scale-105"
                    : "border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Drop your image here</h3>
                    <p className="text-muted-foreground">
                      or <span className="text-primary font-medium">browse files</span>
                    </p>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Supports: JPG, PNG, WebP</div>
                    <div>Max size: 50MB • Up to 4K resolution</div>
                  </div>
                </div>
              </div>

              {/* Live Preview Mockup */}
              <div className="mt-8 relative">
                <img 
                  src={heroImage} 
                  alt="AI Background Removal Demo"
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent rounded-xl" />
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-3">
                  <div className="text-sm font-medium text-foreground">Background removed in 2.3s</div>
                  <div className="text-xs text-muted-foreground">99.8% edge accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;