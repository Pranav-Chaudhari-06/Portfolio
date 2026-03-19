import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react'

function getNextResetDate() {
  const now = new Date()
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1)
  return next.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email'
    if (!formData.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSending(true)
    setStatus(null)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'febe2dd2-93e9-4351-a3e1-3c01befaf56b',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
      setTimeout(() => setStatus(null), 8000)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <motion.input
                  whileFocus={{ borderColor: 'rgba(0,180,216,0.6)' }}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={sending}
                  className="w-full px-5 py-3 bg-card/60 border border-card-border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors disabled:opacity-50"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <motion.input
                  whileFocus={{ borderColor: 'rgba(0,180,216,0.6)' }}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={sending}
                  className="w-full px-5 py-3 bg-card/60 border border-card-border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors disabled:opacity-50"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <motion.textarea
                  whileFocus={{ borderColor: 'rgba(0,180,216,0.6)' }}
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={sending}
                  className="w-full px-5 py-3 bg-card/60 border border-card-border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors resize-none disabled:opacity-50"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={sending ? {} : { scale: 1.02, boxShadow: '0 0 30px rgba(0,180,216,0.3)' }}
                whileTap={sending ? {} : { scale: 0.98 }}
                className="w-full px-8 py-3 bg-accent text-navy font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Status Messages */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl px-5 py-3"
                >
                  <CheckCircle size={18} className="shrink-0" />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'limit' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-start gap-2 text-gold bg-gold/10 border border-gold/20 rounded-xl px-5 py-3 text-sm"
                >
                  <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                  <span>
                    Sorry, Pranav can only receive a limited number of messages this month.
                    Please try again after <strong>{getNextResetDate()}</strong>, or reach out
                    directly at{' '}
                    <a
                      href="mailto:pranav.b.chaudhari.01@gmail.com"
                      className="underline hover:text-accent transition-colors"
                    >
                      pranav.b.chaudhari.01@gmail.com
                    </a>
                  </span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-5 py-3 text-sm"
                >
                  <AlertTriangle size={18} className="shrink-0" />
                  Something went wrong. Please email Pranav directly at{' '}
                  <a
                    href="mailto:pranav.b.chaudhari.01@gmail.com"
                    className="underline hover:text-accent transition-colors"
                  >
                    pranav.b.chaudhari.01@gmail.com
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I'm always open to discussing new projects, opportunities, or partnerships.
              Feel free to reach out!
            </p>

            <div className="space-y-5">
              <motion.a
                href="mailto:pranav.b.chaudhari.01@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group"
              >
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">pranav.b.chaudhari.01@gmail.com</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-300"
              >
                <div className="p-3 bg-accent/10 rounded-xl">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Surat, Gujarat, India</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-3">Find me on</p>
              <div className="flex gap-3">
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
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="p-3 bg-card/60 border border-card-border rounded-xl text-gray-400 hover:text-accent hover:border-accent/40 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
