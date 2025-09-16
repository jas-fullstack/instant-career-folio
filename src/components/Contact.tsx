import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Phone, 
  Send, 
  Download,
  Github,
  ExternalLink,
  Calendar,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sanjeev.dev@example.com",
      action: "mailto:sanjeev.dev@example.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/sanjeev-fullstack",
      action: "https://www.linkedin.com/in/sanjeev-fullstack",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/sanjeev-dev",
      action: "https://github.com",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      action: null,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute consultation",
      action: "#",
      variant: "default" as const
    },
    {
      icon: Download,
      title: "Download Resume",
      description: "Get my latest CV in PDF format",
      action: "#",
      variant: "secondary" as const
    },
    {
      icon: MessageCircle,
      title: "Quick Chat",
      description: "Send me a direct message",
      action: "#",
      variant: "outline" as const
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your next project or explore collaboration opportunities? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="card-animated">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className={`w-10 h-10 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{info.label}</p>
                          {info.action ? (
                            <a 
                              href={info.action}
                              target={info.action.startsWith('http') ? '_blank' : '_self'}
                              className="text-primary hover:underline text-sm"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-sm">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={index}
                      variant={action.variant}
                      className="w-full justify-start h-auto p-4 text-left"
                      onClick={() => {
                        if (action.action !== "#") {
                          window.open(action.action, '_blank');
                        }
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5" />
                        <div>
                          <div className="font-medium">{action.title}</div>
                          <div className="text-xs opacity-80">{action.description}</div>
                        </div>
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Status */}
              <Card className="card-animated">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <Badge variant="secondary">Available for Work</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new projects and full-time opportunities.
                    Response time: Usually within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-animated">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Send me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project inquiry / Job opportunity / General question"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, requirements, or any questions you have..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="btn-hero w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground text-sm">
              Prefer a different way to connect? Feel free to reach out on any platform above. 
              I'm always happy to discuss new opportunities and interesting projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;