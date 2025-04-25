import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="navbar bg-white dark:bg-black text-black dark:text-white shadow-md sticky top-0 z-50 px-4 transition-all duration-300"
      >
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl p-5 text-red-600 dark:text-red-500 font-bold hover:text-red-800 dark:hover:text-amber-700 transition duration-200"
          >
            <span>EvoTech</span>{' '}
            <span className="text-black dark:text-white">African</span>
          </Link>
        </div>

        <div className="flex-none flex items-center gap-4">
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            <Link to="#" className="hover:text-red-600 dark:hover:text-red-600">
              Article
            </Link>
            <Link to="#" className="hover:text-red-600 dark:hover:text-red-600">
              Contact
            </Link>
            <Link to="#" className="hover:text-red-600 dark:hover:text-red-600">
              À propos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-5 right-5 text-3xl hover:text-red-500"
            >
              ✕
            </button>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl hover:text-red-500"
            >
              Accueil
            </Link>
            <Link
              to="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl hover:text-red-500"
            >
              Contact
            </Link>
            <Link
              to="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl hover:text-red-500"
            >
              À propos
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
