import { motion } from "framer-motion"
import { Phone, Search, FileText, Rocket, TrendingUp } from "lucide-react"

interface ProcessStepProps {
  step: number
  title: string
  description: string
  icon: React.ReactNode
  delay: number
  isLast?: boolean
}

function ProcessStep({ step, title, description, icon, delay, isLast }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative flex items-start group"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-primary to-primary/30"></div>
      )}

      {/* Step Number & Icon */}
      <div className="relative">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
          {step}
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
          <div className="text-primary">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="ml-8 flex-1">
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export function ProcessSection() {
  const processSteps = [
    {
      title: "Discovery Call",
      description: "Deep dive into your business goals, current challenges, and growth objectives to understand exactly where we need to focus our efforts.",
      icon: <Phone className="h-4 w-4" />,
      delay: 0.1
    },
    {
      title: "Audit",
      description: "Comprehensive analysis of your existing campaigns, website performance, and competitive landscape to identify immediate opportunities.",
      icon: <Search className="h-4 w-4" />,
      delay: 0.2
    },
    {
      title: "90-Day Blueprint", 
      description: "Strategic roadmap outlining prioritized initiatives, expected outcomes, and key milestones for the first quarter of optimization.",
      icon: <FileText className="h-4 w-4" />,
      delay: 0.3
    },
    {
      title: "Launch & Iterate",
      description: "Implementation of campaigns with continuous testing, optimization, and performance monitoring to maximize results from day one.",
      icon: <Rocket className="h-4 w-4" />,
      delay: 0.4
    },
    {
      title: "Scale",
      description: "Systematic expansion of winning strategies across channels, audiences, and markets to accelerate sustainable growth.",
      icon: <TrendingUp className="h-4 w-4" />,
      delay: 0.5
    }
  ]

  return (
    <section id="process" className="py-20 bg-background">
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
              My{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that transforms marketing challenges into sustainable growth opportunities.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  delay={step.delay}
                  isLast={index === processSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}