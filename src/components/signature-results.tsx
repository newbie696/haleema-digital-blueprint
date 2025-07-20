import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Trophy, Target, TrendingDown } from "lucide-react"

interface CounterProps {
  end: string
  label: string
  icon: React.ReactNode
  delay: number
}

function Counter({ end, label, icon, delay }: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        setDisplayValue(end)
      }, delay)
      return () => clearTimeout(timeoutId)
    }
  }, [isInView, end, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0, y: 30 }}
      animate={isInView ? { scale: 1, opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: delay / 1000 }}
      className="text-center group"
    >
      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
        <div className="text-primary">
          {icon}
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {displayValue}
      </div>
      <div className="text-muted-foreground font-medium max-w-32 mx-auto">
        {label}
      </div>
    </motion.div>
  )
}

export function SignatureResults() {
  const results = [
    {
      end: "120+",
      label: "qualified leads from one Meta Ads sprint",
      icon: <Trophy className="h-8 w-8" />,
      delay: 200
    },
    {
      end: "-20%",
      label: "CPA after iterative A/B testing",
      icon: <TrendingDown className="h-8 w-8" />,
      delay: 400
    },
    {
      end: "-18%",
      label: "bounce rate after GTM UX tweaks",
      icon: <Target className="h-8 w-8" />,
      delay: 600
    }
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
              Signature{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real performance metrics from recent client campaigns, showcasing the power of data-driven optimization.
            </p>
          </motion.div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {results.map((result, index) => (
              <Counter
                key={index}
                end={result.end}
                label={result.label}
                icon={result.icon}
                delay={result.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}