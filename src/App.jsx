import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import { posts } from './data/posts'
import Parallax from './components/Parallax'


function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-300`}
    >
        
      <Router>
      
        <Routes>
            
          <Route path="/" element={<Home posts={posts} darkMode={darkMode} setDarkMode={setDarkMode} />} />
          
          <Route path="/post/:id" element={<PostDetail posts={posts} />} />
        </Routes>
      </Router>
      <Parallax/>
    </div>
  )
}

export default App
