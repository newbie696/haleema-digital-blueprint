import { motion } from "framer-motion"
import { Mail, Calendar, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const footerLinks = {
    navigation: [
      { label: "Home", id: "hero" },
      { label: "Work", id: "case-studies" },
      { label: "Expertise", id: "expertise" },
      { label: "Process", id: "process" },
      { label: "Blog", id: "blog" },
      { label: "Contact", id: "contact" }
    ],
    services: [
      "Google Ads Management",
      "Meta Ads Optimization", 
      "SEO & Content Strategy",
      "Analytics & CRO",
      "Email Marketing",
      "Creative Production"
    ],
    resources: [
      "Free Marketing Audit",
      "Case Studies",
      "Marketing Blog",
      "Strategy Templates",
      "ROI Calculator",
      "Growth Toolkit"
    ]
  }

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand & Contact */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary-foreground font-bold text-lg">HM</span>
                  </div>
                  <span className="text-xl font-bold">Haleema Yasin</span>
                </div>
                
                <p className="text-background/80 mb-6 leading-relaxed">
                  ROI-obsessed Digital Marketing Executive turning clicks into customers through data-driven strategies.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-primary" />
                    <span className="text-background/80">hello@haleemayasin.com</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-3 text-primary" />
                    <span className="text-background/80">24hr response time</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-6">Navigation</h3>
                <ul className="space-y-3">
                  {footerLinks.navigation.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-background/80 hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-6">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((service) => (
                    <li key={service}>
                      <span className="text-background/80">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-6">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((resource) => (
                    <li key={resource}>
                      <a 
                        href="#" 
                        className="text-background/80 hover:text-primary transition-colors duration-200 flex items-center group"
                      >
                        {resource}
                        <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-background/20 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-background/60 text-sm mb-4 md:mb-0">
                © {currentYear} Haleema Mohamed Yasin. All rights reserved.
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-background/60 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}