import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Download, ExternalLink } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#" },
    { id: "about", label: "About", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href === "#" ? "body" : item.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SK</span>
            </div>
            <div>
              <div className="font-bold text-lg">Sanjeev Kumar</div>
              <div className="text-xs text-muted-foreground hidden sm:block">Senior Software Developer</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Badge variant="secondary" className="px-3 py-1">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Available
            </Badge>
            <Button size="sm" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
            <Button size="sm" className="btn-hero">
              <ExternalLink className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-border space-y-3">
                <Badge variant="secondary" className="px-3 py-1 w-fit">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                  Available for Work
                </Badge>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                  <Button size="sm" className="btn-hero flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Hire Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;