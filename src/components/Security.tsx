import { Shield, Lock, Eye, Server, CheckCircle } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All image uploads and downloads are protected with 256-bit SSL encryption. Your data is secure in transit and at rest.",
      details: ["TLS 1.3 encryption", "AES-256 data protection", "Zero-knowledge architecture"]
    },
    {
      icon: Eye,
      title: "No Data Retention",
      description: "We automatically delete your images within 24 hours. Your content is never stored permanently or used for training.",
      details: ["24-hour auto-deletion", "No permanent storage", "Privacy-first design"]
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "SOC 2 Type II compliant infrastructure with enterprise-grade security monitoring and threat detection.",
      details: ["SOC 2 compliant", "24/7 monitoring", "Advanced threat detection"]
    },
    {
      icon: Shield,
      title: "GDPR Compliance",
      description: "Fully compliant with GDPR, CCPA, and international privacy regulations. Your privacy rights are protected.",
      details: ["GDPR compliant", "Data subject rights", "Privacy by design"]
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", status: "Certified", icon: "🛡️" },
    { name: "ISO 27001", status: "Certified", icon: "🔒" },
    { name: "GDPR", status: "Compliant", icon: "🇪🇺" },
    { name: "CCPA", status: "Compliant", icon: "🏛️" }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            Enterprise Security
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold">
            Your Images Are
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Safe & Secure
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We take security seriously. Your images are never stored permanently, 
            shared, or used for training. Complete privacy guaranteed.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-glow-soft transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Promise */}
        <div className="bg-gradient-glass backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                Our Privacy Promise
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your images are processed securely and deleted automatically. We never store, 
                share, or use your content for any purpose other than background removal.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Images stored permanently</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">24hrs</div>
                <div className="text-sm text-muted-foreground">Maximum retention time</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Privacy guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Security Certifications & Compliance
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest security standards with regular audits and certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.name}
                className="bg-card/30 border border-border/30 rounded-xl p-6 text-center hover:shadow-glow-soft transition-all duration-300"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <div className="font-semibold text-foreground text-sm mb-1">{cert.name}</div>
                <div className="text-xs text-primary font-medium">{cert.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Contact */}
        <div className="mt-16 text-center space-y-6">
          <div className="inline-flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
            <Shield className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="font-semibold text-foreground">Security Questions?</div>
              <div className="text-sm text-muted-foreground">
                Contact our security team at{" "}
                <a href="mailto:security@bgremover.ai" className="text-primary hover:underline">
                  security@bgremover.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;