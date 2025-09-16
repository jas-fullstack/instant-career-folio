import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
            Available for new opportunities
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient">
                Sanjeev Kumar
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
              Senior Software Developer
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Badge variant="outline" className="px-4 py-2">Node.js Specialist</Badge>
              <Badge variant="outline" className="px-4 py-2">10+ Years Experience</Badge>
              <Badge variant="outline" className="px-4 py-2">Full-Stack Developer</Badge>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate Node.js developer with expertise in building scalable applications 
            using modern JavaScript technologies. Experienced in MEAN stack, AWS, and 
            creating robust server-side solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="btn-hero px-8 py-6 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <Button variant="ghost" size="lg" className="rounded-full p-4 hover:bg-primary/10">
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="rounded-full p-4 hover:bg-primary/10"
              onClick={() => window.open('https://www.linkedin.com/in/sanjeev-fullstack', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="lg" className="rounded-full p-4 hover:bg-primary/10">
              <ExternalLink className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;