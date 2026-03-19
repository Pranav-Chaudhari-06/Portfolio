import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Server, Database, Monitor } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['C++', 'Java', 'Python', 'C#', 'PHP'],
  },
  {
    title: 'Frameworks & Stack',
    icon: Server,
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', '.NET Core MVC', 'Django REST Framework'],
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Git', 'GitHub'],
  },
  {
    title: 'IDEs',
    icon: Monitor,
    skills: ['Visual Studio', 'VS Code', 'Eclipse', 'Android Studio'],
  },
]

function SkillBadge({ name, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, type: 'spring', stiffness: 200 }}
      whileHover={{
        scale: 1.1,
        y: -3,
        boxShadow: '0 0 20px rgba(0,180,216,0.3)',
      }}
      className="px-4 py-2 bg-navy-lighter/60 border border-card-border rounded-full text-sm text-gray-200 font-mono cursor-default hover:border-accent/50 hover:text-accent transition-colors duration-300"
    >
      {name}
    </motion.span>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 md:py-32 px-4 bg-navy-light/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIdx * 0.2, duration: 0.6 }}
                whileHover={{ borderColor: 'rgba(0,180,216,0.3)' }}
                className="bg-card/40 border border-card-border rounded-2xl p-6 md:p-8 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon className="text-accent" size={22} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBadge
                      key={skill}
                      name={skill}
                      delay={catIdx * 0.15 + skillIdx * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
