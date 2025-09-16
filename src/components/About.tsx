import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Languages", items: ["JavaScript", "Node.js", "PHP"] },
    { category: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL"] },
    { category: "Frameworks", items: ["Express.js", "NestJS", "Angular 2+"] },
    { category: "Cloud & DevOps", items: ["AWS Lambda", "EC2", "S3", "Docker"] },
    { category: "Other", items: ["Laravel", "CodeIgniter", "ChatGPT Integration"] }
  ];

  const highlights = [
    { icon: Code, title: "10+ Years Experience", description: "Extensive experience in full-stack development" },
    { icon: Database, title: "Database Expert", description: "Proficient in SQL and NoSQL databases" },
    { icon: Cloud, title: "Cloud Solutions", description: "AWS certified with hands-on experience" },
    { icon: Zap, title: "API Development", description: "RESTful services and microservices architecture" }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Node.js Developer with 5+ years of relevant experience, specializing in JavaScript 
              technologies and building scalable applications using the MEAN stack.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="card-animated text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Skills Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Skills Overview */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold mb-3 text-primary">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <Card className="card-animated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Experienced in JavaScript technologies such as NodeJS, ExpressJS, Angular 2+, 
                    and MySQL. Strong background in building single-page applications using the MEAN stack.
                  </p>
                  <p>
                    Extensive use of Node environment using NPM, MongoDB, and Mongoose.js to create 
                    robust server-side applications. Proficient in creating user validation forms 
                    and implementing RESTful services.
                  </p>
                  <p>
                    Working knowledge of AWS services including Lambda, EC2, S3, IAM, RDS, and CI/CD. 
                    Also experienced with PHP frameworks like Laravel and CodeIgniter.
                  </p>
                  <p>
                    Currently working at Programming.com as a Senior Software Developer, 
                    focusing on innovative solutions and scalable architectures.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;