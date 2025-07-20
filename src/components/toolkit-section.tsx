import { motion } from "framer-motion"

export function ToolkitSection() {
  const tools = [
    { name: "Google Ads", category: "Paid Media" },
    { name: "GA4", category: "Analytics" },
    { name: "Meta Ads", category: "Paid Media" },
    { name: "Bing Ads", category: "Paid Media" },
    { name: "Mailchimp", category: "Email Marketing" },
    { name: "Canva", category: "Creative" },
    { name: "CapCut", category: "Video" },
    { name: "Hootsuite", category: "Social Media" },
    { name: "HubSpot", category: "CRM" }
  ]

  return (
    <section className="py-20 bg-muted/30">
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
              Toolkit &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Professional-grade tools and verified expertise driving exceptional results.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              <span className="text-sm font-medium text-foreground">
                Google Ads Search Certified • MSc Digital Marketing (Salford)
              </span>
            </div>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-card rounded-xl shadow-sm border border-border flex items-center justify-center mb-3 group-hover:shadow-md group-hover:border-primary/30 transition-all duration-300">
                  <span className="text-xs font-semibold text-foreground text-center px-1 leading-tight">
                    {tool.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {tool.category}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground italic">
              Continuously updating toolkit with the latest marketing technologies and maintaining current certifications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}