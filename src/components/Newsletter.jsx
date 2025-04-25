import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'
import LinkMotion from './LinkMotion'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      toast.error('Veuillez entrer votre email')
      return
    }
    toast.success('Merci pour votre inscription!')
    setEmail('')
  }

  return (
    <motion.section
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-black text-white py-12"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-red-500 mb-4">Restez informé</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Abonnez-vous à notre newsletter pour recevoir les derniers articles et ressources sur le développement web.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Votre email"
            className="flex-grow border border-white px-6 py-3 rounded-full text-white bg-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LinkMotion>
          <button
            type="submit"
            className="rounded-full px-8 py-2 text-white font-semibold shadow-md hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          >
            S'abonner
          </button>
          </LinkMotion>
        </form>
      </div>
      <Toaster />
    </motion.section>
  )
}

export default Newsletter
