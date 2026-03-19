import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, GraduationCap, Award, Gamepad2, Plane, Film, BookOpen, Dribbble } from 'lucide-react'

function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-heading font-bold text-3xl md:text-4xl text-accent">
      {prefix}{count}{suffix}
    </span>
  )
}

const stats = [
  { value: 3, suffix: '+', label: 'Projects Built' },
  { value: 2, prefix: '₹', suffix: 'L', label: 'Govt Funding' },
  { value: 2, suffix: '', label: 'Degrees' },
  { value: 1, suffix: '', label: 'Internship' },
]

const interests = [
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Plane, label: 'Travelling' },
  { icon: Film, label: 'Movies/Series' },
  { icon: BookOpen, label: 'Reading' },
  { icon: Dribbble, label: 'Sports' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 md:py-32 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Motivated IT graduate with hands-on experience in full-stack development using
              MERN stack and .NET Core. Passionate about building scalable web applications,
              REST APIs, and real-time systems. I bring a problem-solving mindset and a
              collaborative attitude to everything I build.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-accent shrink-0" size={18} />
                <span>Surat, Gujarat, India</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <GraduationCap className="text-accent shrink-0 mt-0.5" size={18} />
                <div>
                  <p>M.Sc. Information Technology (Expected 2026) — CGPA: 8.16</p>
                  <p className="text-gray-500 text-sm">B.Sc. IT (2024) — CGPA: 8.00</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Award className="text-accent shrink-0" size={18} />
                <span className="text-sm">Babu Madhav Institute of IT, UKA Tarsadiya University</span>
              </div>
            </div>

            {/* Interests */}
            <div>
              <p className="text-gray-500 text-sm mb-3 uppercase tracking-wider">Interests</p>
              <div className="flex flex-wrap gap-3">
                {interests.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-navy-lighter/50 border border-card-border rounded-full text-sm text-gray-300"
                  >
                    <Icon size={14} className="text-accent" />
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* Decorative code block */}
            <motion.div
              className="bg-card/80 border border-card-border rounded-xl p-6 mb-8 font-mono text-sm"
              whileHover={{ borderColor: 'rgba(0,180,216,0.3)' }}
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="space-y-1 text-gray-400">
                <p><span className="text-purple-400">const</span> <span className="text-accent">developer</span> = {'{'}</p>
                <p className="pl-4"><span className="text-green-400">name</span>: <span className="text-gold">"Pranav Chaudhari"</span>,</p>
                <p className="pl-4"><span className="text-green-400">role</span>: <span className="text-gold">"Full Stack Developer"</span>,</p>
                <p className="pl-4"><span className="text-green-400">stack</span>: [<span className="text-gold">"MERN"</span>, <span className="text-gold">".NET Core"</span>],</p>
                <p className="pl-4"><span className="text-green-400">passion</span>: <span className="text-gold">"Building scalable apps"</span>,</p>
                <p className="pl-4"><span className="text-green-400">coffee</span>: <span className="text-purple-400">true</span>,</p>
                <p>{'}'}</p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0,180,216,0.4)' }}
                  className="bg-card/60 border border-card-border rounded-xl p-5 text-center transition-colors"
                >
                  <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
