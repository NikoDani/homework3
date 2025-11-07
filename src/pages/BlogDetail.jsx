import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BlogContext } from '../context/BlogContext'

export default function BlogDetail() {
  const { blogs } = useContext(BlogContext)
  const { id } = useParams()
  const navigate = useNavigate()

  const blog = blogs.find(b => b.id === parseInt(id))

  if (!blog) return <h2>Blog not found</h2>

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>← back</button>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <p>Detailed information about this blog...</p>
    </div>
  )
}
