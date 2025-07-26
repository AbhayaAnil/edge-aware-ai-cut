import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Zap, CheckCircle, Loader2, Download } from "lucide-react";
import { RemoveBgService } from "@/services/removeBgService";
import { toast } from "sonner";
import heroImage from "@/assets/hero-bg-removal.jpg";

const Hero = () => {
  const [dragActive, setDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return;
    }

    if (file.size > 50 * 1024 * 1024) {
      toast.error('Image size must be less than 50MB');
      return;
    }

    const originalUrl = URL.createObjectURL(file);
    setOriginalImage(originalUrl);
    setProcessedImage(null);
    setIsProcessing(true);

    try {
      const result = await RemoveBgService.removeBackground(file);
      
      if (result.success && result.imageUrl) {
        setProcessedImage(result.imageUrl);
        toast.success('Background removed successfully!');
      } else {
        toast.error(result.error || 'Failed to remove background');
      }
    } catch (error) {
      toast.error('An error occurred while processing the image');
    } finally {
      setIsProcessing(false);
    }
  };

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
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'background-removed.png';
      link.click();
    }
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
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => fileInputRef.current?.click()}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Try It Free Now
                  </>
                )}
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
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
            
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-glow-soft">
              {/* Upload Zone */}
              <div
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer ${
                  dragActive
                    ? "border-primary bg-primary/5 scale-105"
                    : "border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    {isProcessing ? (
                      <Loader2 className="w-8 h-8 text-primary-foreground animate-spin" />
                    ) : (
                      <Upload className="w-8 h-8 text-primary-foreground" />
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {isProcessing ? 'Processing your image...' : 'Drop your image here'}
                    </h3>
                    <p className="text-muted-foreground">
                      or <span className="text-primary font-medium cursor-pointer">browse files</span>
                    </p>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Supports: JPG, PNG, WebP</div>
                    <div>Max size: 50MB • Up to 4K resolution</div>
                  </div>
                </div>
              </div>

              {/* Results Display */}
              {(originalImage || processedImage) && (
                <div className="mt-8 space-y-6">
                  <h4 className="text-lg font-semibold text-center">Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Original Image */}
                    {originalImage && (
                      <div className="space-y-3">
                        <h5 className="text-sm font-medium text-center text-muted-foreground">Original</h5>
                        <div className="bg-muted/30 rounded-xl p-4">
                          <img 
                            src={originalImage} 
                            alt="Original" 
                            className="w-full h-48 object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    )}

                    {/* Processed Image */}
                    {processedImage && (
                      <div className="space-y-3">
                        <h5 className="text-sm font-medium text-center text-muted-foreground">Background Removed</h5>
                        <div className="bg-checkered rounded-xl p-4">
                          <img 
                            src={processedImage} 
                            alt="Background removed" 
                            className="w-full h-48 object-contain rounded-lg"
                          />
                        </div>
                        <div className="text-center">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={handleDownload}
                            className="w-full"
                          >
                            <Download className="w-4 h-4" />
                            Download PNG
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Live Preview Mockup - only show when no results */}
              {!originalImage && !processedImage && (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;