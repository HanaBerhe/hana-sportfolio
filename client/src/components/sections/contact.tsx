import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hanagrimay@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251942684581",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="section-title-contact">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="contact-description">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about data and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6" data-testid="contact-info-title">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        index % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'
                      }`}>
                        <IconComponent className={`h-5 w-5 ${
                          index % 2 === 0 ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground" data-testid={`contact-label-${index}`}>{info.label}</p>
                        <p className="text-muted-foreground" data-testid={`contact-value-${index}`}>{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4" data-testid="social-links-title">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                      data-testid={`social-link-${social.label.toLowerCase()}`}
                    >
                      <IconComponent className="h-4 w-4" />
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 shadow-lg border border-border" data-testid="contact-form-card">
            <h3 className="text-xl font-semibold mb-6" data-testid="contact-form-title">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-border focus:ring-ring"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-border focus:ring-ring"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="text-sm font-medium text-foreground mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-border focus:ring-ring"
                  required
                  data-testid="input-subject"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="border-border focus:ring-ring"
                  required
                  data-testid="textarea-message"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-send-message"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
