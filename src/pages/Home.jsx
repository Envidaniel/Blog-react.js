import { useState } from 'react'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import CategoryFilter from '../components/CategoryFilter'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

const Home = ({ posts, darkMode, setDarkMode }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const handleFilterChange = (category) => {
    if (category === 'all') {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(posts.filter(post => post.tags.includes(category)))
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-all duration-300 overflow-x-hidden">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Bienvenue sur le Blog EvoTech</h1>
          </motion.div>

          <div className="text-4xl md:text-5xl font-bold mb-4 text-red-600 dark:text-white-500">
            <Typewriter
              options={{
                strings: [
                  'Derniers annonce  sur',
                  'React js',
                  'Vue js',
                  'next.js',
                  'JavaScript',
                  'TypeScript'
                ],
                autoStart: true,
                loop: true,
                delay: 4,
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Découvrez les dernières actualités et astuces sur le développement web moderne.
            </p>
          </motion.div>
        </div>

        <CategoryFilter onFilterChange={handleFilterChange} />

        <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex justify-center mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
            {filteredPosts.length === 0 ? (
              <div className="col-span-full text-center">
                <p className="text-xl text-gray-500">Aucun article trouvé</p>
              </div>
            ) : (
              filteredPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))
            )}
          </div>
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div 
          initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-500">Aucun article trouvé</h2>
            <p className="text-gray-500 dark:text-gray-400">Essayez de sélectionner une autre catégorie</p>
          </motion.div>
        )}
      </main>

      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
