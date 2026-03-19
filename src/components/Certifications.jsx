import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Trophy, Medal, Target, Crown } from 'lucide-react'

const certifications = [
  { title: 'Java (Basic)', issuer: 'HackerRank' },
  { title: 'SQL (Intermediate)', issuer: 'HackerRank' },
  { title: 'Python Fundamentals for Beginners', issuer: 'Great Learning Academy' },
]

const achievements = [
  {
    icon: Trophy,
    title: 'Secured ₹2 Lakh Government Funding',
    subtitle: 'SSIP Ideahunt 2024',
  },
  {
    icon: Medal,
    title: '5th Place, Tech Fest',
    subtitle: 'Charotar University, Anand, Gujarat',
  },
  {
    icon: Target,
    title: 'SSIP Hackathon 2023 Participant',
    subtitle: 'Education Department, Government of Gujarat',
  },
  {
    icon: Crown,
    title: 'Head, Technical Committee, Student Union 2024',
    subtitle: 'Babu Madhav Institute of Information Technology',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Certifications &{' '}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl font-heading font-semibold mb-6 flex items-center gap-2"
            >
              <Award className="text-accent" size={22} />
              Certifications
            </motion.h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  whileHover={{
                    x: 5,
                    borderColor: 'rgba(0,180,216,0.4)',
                  }}
                  className="bg-card/40 border border-card-border rounded-xl p-5 transition-all duration-300"
                >
                  <p className="text-white font-medium">{cert.title}</p>
                  <p className="text-accent/80 text-sm mt-1">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-xl font-heading font-semibold mb-6 flex items-center gap-2"
            >
              <Trophy className="text-gold" size={22} />
              Achievements
            </motion.h3>
            <div className="space-y-4">
              {achievements.map((ach, i) => {
                const Icon = ach.icon
                return (
                  <motion.div
                    key={ach.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    whileHover={{
                      x: -5,
                      borderColor: 'rgba(251,191,36,0.4)',
                    }}
                    className="bg-card/40 border border-card-border rounded-xl p-5 flex items-start gap-4 transition-all duration-300"
                  >
                    <div className="p-2 bg-gold/10 rounded-lg shrink-0 mt-0.5">
                      <Icon className="text-gold" size={18} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{ach.title}</p>
                      <p className="text-gray-400 text-sm mt-1">{ach.subtitle}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
