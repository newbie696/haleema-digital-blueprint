import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  delay: number
}

function BlogPost({ title, excerpt, date, readTime, delay }: BlogPostProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
    >
      <Card className="h-full shadow-sm border-border hover:shadow-lg transition-all duration-300 group-hover:border-primary/30">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{readTime} read</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {excerpt}
          </p>

          {/* Read More */}
          <Button 
            variant="ghost" 
            className="p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform"
          >
            Read more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function BlogSection() {
  // TODO: Replace with real blog posts when available
  const blogPosts = [
    {
      title: "CTR vs CVR — Which Metric Matters First?",
      excerpt: "Understanding the relationship between click-through rates and conversion rates, and how to prioritize optimization efforts for maximum campaign performance.",
      date: "Dec 15, 2024",
      readTime: "5 min",
      delay: 0.1
    },
    {
      title: "GA4 Event Tracking in 15 Minutes",
      excerpt: "Step-by-step guide to implementing comprehensive event tracking in Google Analytics 4 for better campaign attribution and user behavior insights.",
      date: "Dec 10, 2024", 
      readTime: "8 min",
      delay: 0.2
    },
    {
      title: "Designing Scroll-Stopping Ads in Canva",
      excerpt: "Creative principles and practical techniques for designing high-converting ad creatives that capture attention and drive engagement across Meta platforms.",
      date: "Dec 5, 2024",
      readTime: "6 min",
      delay: 0.3
    }
  ]

  return (
    <section id="blog" className="py-20 bg-muted/30">
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
              Latest{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical digital marketing strategies and insights to help you grow your business.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                delay={post.delay}
              />
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}