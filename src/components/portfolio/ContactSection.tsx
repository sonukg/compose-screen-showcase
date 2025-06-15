
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success message
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sonukg97@gmail.com",
      link: "mailto:sonukg97@gmail.com"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/sonukg",
      link: "https://github.com/sonukg"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/sonukumar97",
      link: "https://www.linkedin.com/in/sonukumar97"
    }
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-muted/30 dark:bg-primary/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to work together? I'd love to hear about your project and discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      rows={6}
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about Android development. Feel free to reach out 
                through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="border-l-4 border-l-accent">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="bg-accent/20 p-3 rounded-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <info.icon className="w-6 h-6 text-accent" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <a 
                            href={info.link}
                            className="text-accent hover:text-accent/80 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-accent/10 border-accent/30">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-2">Quick Response</h4>
                  <p className="text-muted-foreground text-sm">
                    I typically respond to emails within 24 hours during business days. 
                    For urgent matters, feel free to connect with me on LinkedIn.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
