import React, { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'
import { useNavigate }from 'react-router-dom'

export default function Blogs(){
  const { blogs } = useContext(BlogContext)
  const navigate = useNavigate()

  return (
    <div className="container">
      <h2>Blogs</h2>
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-card"key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.description.slice(0,40)}...</p>
            <button onClick={()=> navigate(`/blog/${blog.id}`)}>Show more</button>
          </div>
        ))}
      </div>
    </div>
  )
}
