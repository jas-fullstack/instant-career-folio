import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Heart, 
  Code, 
  Coffee,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sanjeev-fullstack", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sanjeev.dev@example.com", label: "Email" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const skills = [
    "Node.js", "JavaScript", "React", "Angular", "MongoDB", "MySQL", "AWS", "Docker"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">SK</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Sanjeev Kumar</h3>
                  <p className="text-muted-foreground text-sm">Senior Software Developer</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Passionate Node.js developer with 10+ years of experience building scalable 
                applications. Always excited to work on challenging projects and innovative solutions.
              </p>

              <div className="flex items-center gap-2 mb-6">
                <Badge variant="secondary" className="px-3 py-1">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                  Available for new opportunities
                </Badge>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="rounded-full p-3 hover:bg-primary/10"
                      onClick={() => window.open(social.href, '_blank')}
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-semibold mb-4 text-primary">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Sanjeev Kumar. Made with</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>and</span>
              <Coffee className="h-4 w-4 text-accent" />
              <span>using</span>
              <Code className="h-4 w-4 text-primary" />
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Built with React, TypeScript & Tailwind CSS
              </p>
              
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full p-2"
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;