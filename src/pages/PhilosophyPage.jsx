import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Lightbulb, Globe } from 'lucide-react'

const PhilosophyPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-earth-50 pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-metal-600 to-metal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-metal-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Map</span>
            </button>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Philosophical Framework
              </h1>
              <p className="text-xl text-metal-100 mb-4">
                V.Y. Mudimbe's Vision of African Pluralism
              </p>
              <p className="text-lg text-metal-100 leading-relaxed">
                Understanding Africa through internal diversity rather than external definitions. 
                This curatorial approach embraces the complexity and plurality that exists within 
                the continent, challenging monolithic colonial narratives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-700 mb-6">
              Core Philosophical Concepts
            </h2>
            <p className="text-lg text-metal-600 max-w-3xl mx-auto">
              V.Y. Mudimbe's philosophy provides the intellectual foundation for understanding 
              African cultural diversity beyond colonial frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Internal Pluralism",
                description: "Africa is not a single entity but a collection of diverse cultures, languages, traditions, and worldviews that must be understood on their own terms.",
                color: "earth"
              },
              {
                icon: BookOpen,
                title: "Decolonizing Knowledge",
                description: "Moving beyond colonial categories and frameworks to develop indigenous ways of understanding African realities and experiences.",
                color: "metal"
              },
              {
                icon: Lightbulb,
                title: "Cultural Invention",
                description: "African cultures are not static or traditional in opposition to modernity, but constantly evolving and creating new forms of expression.",
                color: "gold"
              }
            ].map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="philosophy-card"
              >
                <div className={`w-12 h-12 bg-${concept.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <concept.icon className={`text-${concept.color}-600`} size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-earth-700 mb-3">
                  {concept.title}
                </h3>
                <p className="text-metal-600 leading-relaxed">
                  {concept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How This Applies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-earth-700 mb-6">
                Applied to Contemporary Art
              </h2>
              <div className="space-y-4 text-metal-600 leading-relaxed">
                <p>
                  Each artist in this exhibition represents a different facet of African experience, 
                  demonstrating the internal complexity that Mudimbe advocates for understanding.
                </p>
                <p>
                  Rather than presenting "African art" as a monolithic category, we see how artists 
                  from different regions engage with their specific cultural contexts while participating 
                  in global contemporary art conversations.
                </p>
                <p>
                  This curatorial approach reveals how African artists are not merely responding to 
                  Western influence, but creating entirely new artistic languages from their own 
                  cultural foundations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-earth-50 rounded-xl p-8 border border-earth-200"
            >
              <h3 className="text-2xl font-serif font-semibold text-earth-700 mb-6">
                "Not A Country"
              </h3>
              <blockquote className="text-lg text-metal-600 italic leading-relaxed">
                "Africa is not a country, but a continent of over 50 nations, thousands of languages, 
                and countless cultural traditions. This exhibition celebrates that diversity rather 
                than seeking to reduce it to simplified narratives."
              </blockquote>
              <p className="text-sm text-metal-500 mt-4">
                — Curatorial Statement inspired by V.Y. Mudimbe's philosophy
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-earth-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Experience the Diversity
            </h2>
            <p className="text-lg text-earth-100 mb-8 leading-relaxed">
              Now that you understand the philosophical framework, explore how each artist 
              embodies these concepts through their unique artistic practices and cultural perspectives.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-white text-earth-600 px-8 py-3 rounded-lg font-medium hover:bg-earth-50 transition-colors shadow-lg"
            >
              Explore the Artists
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PhilosophyPage 