import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PostCard = ({ post }) => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
      className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden"
    >
      <figure className="h-48 sm:h-56 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </figure>
      <div className="card-body p-4 sm:p-6">
        

        <p className="text-gray-500 text-sm sm:text-base mt-2 line-clamp-2 text-center sm:text-left">
          {post.excerpt}
        </p>
        <div className="card-actions justify-between items-center mt-4 text-sm flex-wrap gap-2 sm:flex-nowrap">
          <span className="text-gray-400">{post.date}</span>
          <Link
        to={`/post/${post.id}`}
        className="inline-block px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
        >
        Lire plus
</Link>

        </div>
      </div>
    </motion.div>
  )
}

export default PostCard
