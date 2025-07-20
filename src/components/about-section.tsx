import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface StatCardProps {
  value: string
  label: string
  delay: number
}

function StatCard({ value, label, delay }: StatCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        setDisplayValue(value)
      }, delay)
      return () => clearTimeout(timeoutId)
    }
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center p-6 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300"
    >
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {displayValue}
      </div>
      <div className="text-sm text-muted-foreground font-medium">
        {label}
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  const stats = [
    { value: "+22%", label: "Avg. organic traffic lift", delay: 200 },
    { value: "+40%", label: "Social engagement jump", delay: 400 },
    { value: "7.4%", label: "Meta Ads CVR", delay: 600 },
    { value: "5.8×", label: "Top ROAS achieved", delay: 800 }
  ]

  return (
    <section className="py-20 bg-background">
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
              Your Data-Driven{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Growth Partner
              </span>
            </h2>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                I'm a results-obsessed Digital Marketing Executive with over 5 years of experience helping businesses scale through strategic paid advertising, SEO optimization, and conversion-focused analytics. My expertise lies in turning data insights into profitable campaigns that deliver measurable ROI.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                From startups to established enterprises, I've helped brands achieve breakthrough growth through Google Ads, Meta advertising, comprehensive SEO strategies, and sophisticated marketing automation. Every campaign is built on data, optimized for performance, and designed to scale sustainably.
              </p>
            </div>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                delay={stat.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}