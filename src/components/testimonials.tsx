import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // TODO: Replace with real testimonials when available
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Solutions",
      content: "Haleema's strategic approach to our Google Ads campaigns resulted in a 240% increase in qualified leads within 3 months. Her attention to data-driven optimization is exceptional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "E-commerce Innovations",
      content: "Working with Haleema transformed our digital presence. Our ROAS improved from 2.1× to 5.8× through her expert Meta Ads optimization and conversion tracking setup.",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from businesses I've helped scale their digital presence.
            </p>
          </motion.div>

          {/* Testimonial Slider */}
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg border-border">
                <CardContent className="p-8 md:p-12 text-center">
                  {/* Star Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="flex justify-center items-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                {/* Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
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
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}