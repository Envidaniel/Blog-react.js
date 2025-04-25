import { motion } from 'framer-motion'

const LinkMotion = ({ children, href = "#" }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ color: "#ef4444", x: 4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="block cursor-pointer"
    >
      {children}
    </motion.a>
  )
}

export default LinkMotion
