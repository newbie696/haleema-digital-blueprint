import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, MessageSquare, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    goals: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Grow{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Faster?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how data-driven marketing can accelerate your business growth. 
              Book a free audit or send me a message.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-lg border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-foreground">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-foreground">Monthly Ad Budget</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<1k">Less than £1,000</SelectItem>
                          <SelectItem value="1k-5k">£1,000 - £5,000</SelectItem>
                          <SelectItem value="5k-10k">£5,000 - £10,000</SelectItem>
                          <SelectItem value="10k-25k">£10,000 - £25,000</SelectItem>
                          <SelectItem value="25k+">£25,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="goals" className="text-foreground">Goals & Challenges</Label>
                      <Textarea
                        id="goals"
                        value={formData.goals}
                        onChange={(e) => handleInputChange("goals", e.target.value)}
                        placeholder="Tell me about your current challenges and what you'd like to achieve..."
                        className="mt-1 min-h-[120px]"
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Calendly */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <Card className="shadow-lg border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Quick Contact</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">hello@haleemayasin.com</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Response Time</p>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Strategy Call
                  </Button>
                </CardContent>
              </Card>

              {/* Calendly Embed Placeholder */}
              <Card className="shadow-lg border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Schedule a Call</h3>
                  <div className="bg-muted/50 rounded-lg p-8 text-center">
                    <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Book a 30-minute strategy call to discuss your growth goals
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Open Calendar
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    {/* TODO: Replace with actual Calendly embed */}
                    Calendly integration will be added here
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}