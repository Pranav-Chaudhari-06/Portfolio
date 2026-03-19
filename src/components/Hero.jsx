import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Download, FolderOpen } from 'lucide-react'
import { Link } from 'react-scroll'

function Particle({ index }) {
  const style = useMemo(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }), [])

  return (
    <motion.div
      className="absolute w-1 h-1 bg-accent/30 rounded-full"
      style={style}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 3 + Math.random() * 4,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: 'easeInOut',
      }}
    />
  )
}

const roles = [
  'Full Stack Developer',
  'MERN Stack Developer',
  '.NET Core Developer',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentRole = roles[roleIndex]

  const handleTyping = useCallback(() => {
    if (!isDeleting) {
      if (text.length < currentRole.length) {
        setText(currentRole.slice(0, text.length + 1))
      } else {
        setTimeout(() => setIsDeleting(true), 1500)
      }
    } else {
      if (text.length > 0) {
        setText(currentRole.slice(0, text.length - 1))
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }
  }, [text, isDeleting, currentRole, roleIndex])

  useEffect(() => {
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [handleTyping, isDeleting])

  const particles = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => <Particle key={i} index={i} />),
  [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-dark/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Particles */}
        <div className="absolute inset-0">{particles}</div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent font-mono text-sm md:text-base mb-4 tracking-wider"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            Pranav
          </span>{' '}
          <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
            Chaudhari
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-3xl font-heading text-gray-300 mb-6 h-10"
        >
          <span>{text}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-0.5 h-6 md:h-8 bg-accent ml-1 align-middle"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto italic"
        >
          "Building scalable solutions, one line at a time."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link to="projects" smooth duration={500}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,180,216,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent text-navy font-semibold rounded-lg flex items-center gap-2 justify-center cursor-pointer hover:bg-accent/90 transition-colors"
            >
              <FolderOpen size={18} />
              View Projects
            </motion.button>
          </Link>
          <motion.a
            href="/resume/Pranav_Chaudhari_Resume.pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,180,216,0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-accent text-accent rounded-lg flex items-center gap-2 justify-center hover:bg-accent/10 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/Pranav-Chaudhari-06', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/pranav-b-chaudhari', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:pranav.b.chaudhari.01@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-accent transition-colors p-2"
              aria-label={label}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth duration={500} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 hover:text-accent transition-colors"
          >
            <span className="text-xs mb-1 tracking-wider uppercase">Scroll</span>
            <ChevronDown size={20} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
