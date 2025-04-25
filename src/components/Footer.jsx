import { motion } from 'framer-motion'
import LinkMotion from './LinkMotion'

const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: false }}
      className="bg-black text-white py-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-red-500 mb-2">Services</h4>
          <LinkMotion href="#">Développement web</LinkMotion>
          <LinkMotion href="#">Formation</LinkMotion>
          <LinkMotion href="#">Consulting</LinkMotion>
        </div>

        <div>
          <h4 className="text-red-500 mb-2">Entreprise</h4>
          <LinkMotion href="#">À propos</LinkMotion>
          <LinkMotion href="#">Contact</LinkMotion>
          <LinkMotion href="#">Carrières</LinkMotion>
        </div>

        <div>
          <h4 className="text-red-500 mb-2">Légal</h4>
          <LinkMotion href="#">Conditions d'utilisation</LinkMotion>
          <LinkMotion href="#">Politique de confidentialité</LinkMotion>
          <LinkMotion href="#">Politique des cookies</LinkMotion>
        </div>

        <div className="flex items-center justify-center md:justify-end text-center md:text-right text-sm text-white">
          <LinkMotion href="#">
            © {new Date().getFullYear()} EvoTech African. <br className="block sm:hidden" />Tous droits réservés.❤️
          </LinkMotion>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
