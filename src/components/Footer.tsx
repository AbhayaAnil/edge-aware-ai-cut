import { Github, Twitter, Linkedin, Mail, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigation = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "API Documentation", href: "#api" },
        { label: "Pricing", href: "#pricing" },
        { label: "Use Cases", href: "#use-cases" },
        { label: "Comparison", href: "#comparison" }
      ]
    },
    {
      title: "Company", 
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Press Kit", href: "/press" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Community", href: "/community" },
        { label: "Status Page", href: "/status" },
        { label: "API Status", href: "/api-status" },
        { label: "Report Bug", href: "/bug-report" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "GDPR", href: "/gdpr" },
        { label: "Security", href: "/security" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/bgremover", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/bgremover", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/bgremover", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@bgremover.ai", label: "Email" }
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ja", name: "日本語", flag: "🇯🇵" }
  ];

  return (
    <footer className="bg-card/30 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-xl font-bold text-foreground">
                  BG Remover AI
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Advanced AI background removal technology trusted by professionals worldwide. 
                Pixel-perfect results in seconds, not hours.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button variant="hero" size="sm">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get product updates and tips. Unsubscribe anytime.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {navigation.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security & Compliance */}
        <div className="border-t border-border/30 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <div>
                <div className="font-medium text-foreground text-sm">SOC 2 Compliant</div>
                <div className="text-xs text-muted-foreground">Enterprise security standards</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary" />
              <div>
                <div className="font-medium text-foreground text-sm">GDPR Ready</div>
                <div className="text-xs text-muted-foreground">Privacy by design</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <div>
                <div className="font-medium text-foreground text-sm">99.9% Uptime</div>
                <div className="text-xs text-muted-foreground">Reliable infrastructure</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30 gap-6">
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <select className="bg-transparent text-sm text-muted-foreground border-none focus:outline-none cursor-pointer">
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 BG Remover AI. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Made with ❤️ for creators worldwide
            </p>
          </div>

          {/* Status Indicators */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">API Status: Operational</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">All Systems: Normal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;