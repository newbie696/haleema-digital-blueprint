import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CaseStudy {
  client: string
  challenge: string
  action: string
  outcome: string
  industry: string
  image: string
}

export function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const caseStudies: CaseStudy[] = [
    {
      client: "Zwarma",
      challenge: "CTR < 3%",
      action: "Keyword overhaul + Dynamic Keyword Insertion",
      outcome: "CTR ↑ 21%, conversions ↑ 25%",
      industry: "QSR (Quick Service Restaurant)",
      image: "restaurant"
    },
    {
      client: "Teabench",
      challenge: "Phrase vs Broad keyword test needed",
      action: "Strategic switch to Broad Match keywords",
      outcome: "+99% conversions, doubled sales",
      industry: "E-commerce",
      image: "ecommerce"
    },
    {
      client: "Jashmi Investment",
      challenge: "High CPA reducing profitability",
      action: "Implemented hourly ad scheduling",
      outcome: "Ad waste -6%, conversions ↑ 66%",
      industry: "Financial Services",
      image: "finance"
    },
    {
      client: "Lens Factory",
      challenge: "Low clicks + high CPC",
      action: "Complete creative campaign revamp",
      outcome: "Clicks ↑ 14%, CPC -12%",
      industry: "E-commerce",
      image: "retail"
    },
    {
      client: "Nellites Tech",
      challenge: "Lead generation optimization",
      action: "SME-focused Meta Ads targeting",
      outcome: "144 leads/2 wks, £0.60 CPL, ROAS 5.8×",
      industry: "Technology",
      image: "tech"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section id="case-studies" className="py-20 bg-muted/30">
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
              Case{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Studies
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real client transformations showcasing strategic problem-solving and measurable growth results.
            </p>
          </motion.div>

          {/* Case Study Carousel */}
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden shadow-lg border-border">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    {/* Image Side */}
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl font-bold text-primary">
                            {caseStudies[currentIndex].client.charAt(0)}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {caseStudies[currentIndex].client}
                        </h3>
                        <p className="text-muted-foreground">
                          {caseStudies[currentIndex].industry}
                        </p>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">Challenge</h4>
                          <p className="text-muted-foreground">
                            {caseStudies[currentIndex].challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">Key Action</h4>
                          <p className="text-muted-foreground">
                            {caseStudies[currentIndex].action}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">Outcome</h4>
                          <p className="text-foreground font-semibold text-lg">
                            {caseStudies[currentIndex].outcome}
                          </p>
                        </div>

                        <Button 
                          variant="outline" 
                          className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                        >
                          View case study
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}