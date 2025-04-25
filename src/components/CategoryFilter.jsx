import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  { id: 'all', name: 'Tous les articles' },
  { id: 'react', name: 'React' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'next.js', name: 'Next.js' },
  { id: 'tips', name: 'Astuces' },
]

const CategoryFilter = ({ onFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState('all')

  const handleClick = (categoryId) => {
    setActiveCategory(categoryId)
    onFilterChange(categoryId)
  }

  return (
    <div className="flex overflow-x-auto justify-center pb-2 gap-2 scrollbar-hide">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          onClick={() => handleClick(category.id)}
          aria-pressed={activeCategory === category.id}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 * index }}
          className={`px-4 py-2 whitespace-nowrap bg-black hover:text-red-500 transition-all duration-300 ease-in-out transform ${
            activeCategory === category.id
              ? 'shadow-lg scale-105 text-red-500'
              : 'shadow-lg scale-100'
          }`}
        >
          {category.name}
        </motion.button>
      ))}
    </div>
  )
}

export default CategoryFilter
