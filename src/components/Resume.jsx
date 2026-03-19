import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-32 px-4 bg-navy-light/30" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <FileText className="text-accent" size={28} />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10">
            Want to know more about my experience and skills?
          </p>

          <motion.a
            href={`${import.meta.env.BASE_URL}resume/Pranav_Chaudhari_Resume.pdf`}
            download
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(0,180,216,0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-3 px-10 py-4 bg-accent text-navy font-heading font-bold text-lg rounded-xl overflow-hidden group"
          >
            {/* Pulse ring */}
            <motion.span
              className="absolute inset-0 rounded-xl border-2 border-accent"
              animate={{
                scale: [1, 1.15],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            <Download size={20} className="group-hover:animate-bounce" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
