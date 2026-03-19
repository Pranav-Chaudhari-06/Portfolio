import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experience = {
  title: 'Software Engineer Intern',
  company: 'Casepoint Pvt. Ltd.',
  period: 'Aug 2025 – Jan 2026',
  location: 'Surat, India',
  points: [
    'Developed QMS (Query Management System) using .NET Core MVC to streamline client-provider issue tracking and resolution workflows.',
    'Built AutoFixPro, a multi-garage management platform with real-time service tracking, invoicing, async notifications, and predictive maintenance reminders using .NET Core, PostgreSQL, Redis, and RabbitMQ.',
    'Optimized backend architecture for high concurrency and performance; gained hands-on experience in end-to-end software development lifecycle.',
  ],
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Work{' '}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-accent to-accent-dark/30"
          />

          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
            className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-4 h-4 bg-accent rounded-full shadow-[0_0_20px_rgba(0,180,216,0.6)] z-10"
          />

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="ml-12 md:ml-0 md:w-1/2 md:ml-auto md:pl-12"
          >
            <motion.div
              whileHover={{
                borderColor: 'rgba(0,180,216,0.4)',
                boxShadow: '0 0 30px rgba(0,180,216,0.1)',
              }}
              className="bg-card/60 border border-card-border rounded-2xl p-6 md:p-8 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg shrink-0 mt-1">
                  <Briefcase className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {experience.title}
                  </h3>
                  <p className="text-accent font-semibold">{experience.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-accent/70" />
                  {experience.period}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-accent/70" />
                  {experience.location}
                </div>
              </div>

              <ul className="space-y-3">
                {experience.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.2 }}
                    className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
