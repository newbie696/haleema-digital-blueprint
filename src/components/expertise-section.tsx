import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Search, 
  BarChart3, 
  Mail, 
  Camera, 
  ShoppingCart 
} from "lucide-react"

interface ExpertiseCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function ExpertiseCard({ icon, title, description, delay }: ExpertiseCardProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="p-6 bg-card rounded-xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <div className="text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Paid Media",
      description: "Google, Bing & Meta Ads scaling strategies that maximize ROAS while minimizing acquisition costs.",
      delay: 0.1
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Organic Growth",
      description: "SEO optimization, on-page enhancements, and content calendars that drive sustainable traffic.",
      delay: 0.2
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & CRO",
      description: "GA4 implementation, GTM setup, and A/B + MVT testing for continuous optimization.",
      delay: 0.3
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email & Automation",
      description: "Mailchimp flows and automated nurture sequences that convert prospects into customers.",
      delay: 0.4
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Creative Production",
      description: "High-converting ad creatives using Canva & CapCut for scroll-stopping visual content.",
      delay: 0.5
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-commerce Feed Mgmt",
      description: "Google Merchant Center optimization and product feed management for maximum visibility.",
      delay: 0.6
    }
  ]

  return (
    <section id="expertise" className="py-20 bg-muted/30">
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
              Expertise &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to accelerate growth and maximize your return on investment.
            </p>
          </motion.div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard
                key={index}
                icon={area.icon}
                title={area.title}
                description={area.description}
                delay={area.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}