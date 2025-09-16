import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Server, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "smartBites",
      description: "A comprehensive food tracking application that helps users monitor their daily nutrition intake using AI-powered APIs.",
      longDescription: "smartBites enables users to track their food consumption with accurate nutrition calculations through ChatGPT and Nutritionix APIs. Features HIPAA-compliant encryption and detailed nutrition analytics.",
      technologies: ["Node.js", "MySQL", "ChatGPT API", "Nutritionix API", "Crypto"],
      features: [
        "Daily food intake tracking",
        "AI-powered nutrition calculation",
        "HIPAA-compliant encryption",
        "Protein and calorie monitoring",
        "Mobile app integration"
      ],
      url: "https://liquidiq.ai/",
      icon: Database,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Vantara Accounting System",
      description: "Enterprise accounting system developed for Reliance's internal operations with advanced GST calculations and Excel export capabilities.",
      longDescription: "A comprehensive accounting solution built for Reliance's internal departments, featuring complex GST calculations, data export functionality, and admin panel management.",
      technologies: ["Node.js", "Angular", "SQL Server", "Excel Integration"],
      features: [
        "GST calculations and compliance",
        "Excel data export functionality",
        "Angular admin panel",
        "Enterprise-grade security",
        "Multi-department support"
      ],
      url: null,
      icon: Shield,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Market360",
      description: "Advanced e-commerce analytics platform helping brands and retailers grow online revenue with variant-level insights.",
      longDescription: "Market360 provides comprehensive e-commerce analytics with variant-level data and insights, powered by optimized queries and advanced indexing for fast response times.",
      technologies: ["Node.js", "MongoDB", "Analytics APIs", "Indexing"],
      features: [
        "Variant-level e-commerce data",
        "Revenue growth insights",
        "Optimized query performance",
        "Real-time analytics dashboard",
        "Expert consultation support"
      ],
      url: "https://www.eclerxdigital.com/market360/",
      icon: Server,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Vex Fitness",
      description: "Complete fitness platform with workout tracking, nutrition planning, and payment integration using modern cloud architecture.",
      longDescription: "A full-featured fitness application built with MEAN stack and AWS services, offering workout tracking, nutrition planning, and seamless payment processing through Stripe.",
      technologies: ["Node.js", "Angular", "AWS Lambda", "SES", "EC2", "Stripe"],
      features: [
        "Workout tracking and planning",
        "Nutrition management",
        "Stripe payment integration",
        "AWS cloud infrastructure",
        "Real-time notifications"
      ],
      url: "https://app.vex-fitness.com/",
      icon: Database,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of impactful applications I've developed using modern technologies 
              and best practices in software architecture.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="card-animated group overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {project.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-primary">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-xs text-muted-foreground/70 italic">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.url && (
                        <Button 
                          size="sm" 
                          className="btn-hero flex-1"
                          onClick={() => window.open(project.url, '_blank')}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="px-4">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="card-animated max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always excited to discuss new projects and opportunities. 
                  Let's build something amazing together!
                </p>
                <Button size="lg" className="btn-accent">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View All Projects
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;