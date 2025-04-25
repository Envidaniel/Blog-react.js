import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const PostDetail = ({ posts }) => {
  const { id } = useParams()
  const post = posts.find(p => p.id === parseInt(id))

  if (!post) {
    return <div className="text-center py-12">Article non trouvé</div>
  }

  return (
    <motion.div
      
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        
        <h1 className="mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date} • {post.readTime} min de lecture</p>
        
        <img 
          src={post.image} 
          alt={post.title} 
          className="rounded-lg shadow-lg w-full h-auto mb-8"
        />
        
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <div className="divider"></div>
        
      </article>
    </motion.div>
  )
}

export default PostDetail