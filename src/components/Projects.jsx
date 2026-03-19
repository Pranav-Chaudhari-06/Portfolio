import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, Lock } from 'lucide-react'

const projects = [
  {
    title: 'DevTrack',
    subtitle: 'Developer Task & Bug Tracking System',
    description:
      'Full-stack project management and bug tracking tool inspired by Jira/Linear. Features kanban board, role-based access control, real-time notifications via Socket.io, and AI-powered bug severity analysis via a Django REST microservice.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Django REST', 'Socket.io'],
    github: 'https://github.com/Pranav-Chaudhari-06/DevTrack',
  },
  {
    title: 'AutoFixPro',
    subtitle: 'Intelligent Garage Management System',
    description:
      'Multi-garage management platform with real-time service tracking, invoicing, async notifications, and predictive maintenance reminders. Built for high-concurrency workloads.',
    tech: ['.NET Core MVC', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    github: null,
    private: true,
  },
  {
    title: 'Immersive Homes',
    subtitle: 'AR/VR Infrastructure Preview Tool',
    description:
      'AR/VR platform enabling clients to visualize buildings and infrastructure before construction. Selected at SSIP Ideahunt 2024 and secured ₹2 lakh in government funding.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Pranav-Chaudhari-06/ImmersiveHomes',
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        y: -8,
        borderColor: 'rgba(0,180,216,0.4)',
        boxShadow: '0 20px 40px rgba(0,180,216,0.1)',
      }}
      className="bg-card/60 border border-card-border rounded-2xl p-6 md:p-8 flex flex-col h-full transition-all duration-300 group"
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-white group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-accent/80 text-sm font-medium mt-1">{project.subtitle}</p>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      {/* GitHub link or private badge */}
      {project.github ? (
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-5 py-2.5 border border-card-border rounded-lg text-sm text-gray-300 hover:text-accent hover:border-accent/40 transition-all duration-300"
        >
          <Github size={16} />
          View on GitHub
          <ExternalLink size={14} />
        </motion.a>
      ) : (
        <div className="flex items-center justify-center gap-2 px-5 py-2.5 border border-card-border rounded-lg text-sm text-gray-500">
          <Lock size={14} />
          Private — built during internship
        </div>
      )}
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-navy-light/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
