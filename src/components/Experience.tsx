import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Programming.com (Mobile Programming India Pvt. Ltd.)",
      position: "Senior Software Developer",
      duration: "May 2022 – Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading development of scalable web applications using Node.js and modern JavaScript frameworks. Responsible for architecture decisions and mentoring junior developers.",
      achievements: [
        "Led development of multiple high-impact projects",
        "Implemented microservices architecture",
        "Optimized application performance by 40%",
        "Mentored team of 5 junior developers"
      ]
    },
    {
      company: "smartData Enterprises",
      position: "Sr. Associate",
      duration: "Nov 2017 to Aug 2021",
      location: "India",
      type: "Full-time",
      description: "Developed enterprise-level applications using MEAN stack. Worked on various client projects including e-commerce platforms and management systems.",
      achievements: [
        "Built 15+ successful web applications",
        "Improved code quality through best practices",
        "Collaborated with cross-functional teams",
        "Reduced deployment time by 60%"
      ]
    },
    {
      company: "eWeb A1Professionals Pvt. Ltd.",
      position: "Associate",
      duration: "Dec 2015 to Sept 2017",
      location: "India",
      type: "Full-time",
      description: "Started career as a full-stack developer working on various web development projects. Gained experience in PHP frameworks and JavaScript technologies.",
      achievements: [
        "Delivered 10+ client projects successfully",
        "Learned and mastered multiple technologies",
        "Built strong foundation in web development",
        "Received recognition for quick learning"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Over 10 years of progressive experience in software development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5" />

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 mt-6 ring-4 ring-background" />
                
                {/* Experience Card */}
                <Card className={`card-animated ml-16 md:ml-0 ${index % 2 !== 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{exp.position}</CardTitle>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;