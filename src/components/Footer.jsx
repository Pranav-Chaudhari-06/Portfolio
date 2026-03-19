import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/Pranav-Chaudhari-06', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/pranav-b-chaudhari', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:pranav.b.chaudhari.01@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-light/50 border-t border-card-border py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm text-center md:text-left">
          &copy; 2026 Pranav Chaudhari. Built with React.js & Tailwind CSS
        </p>
        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="text-gray-500 hover:text-accent transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
