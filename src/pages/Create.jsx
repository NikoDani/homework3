import React, { useContext, useState } from 'react'
import { BlogContext } from '../context/BlogContext'
import { useNavigate } from 'react-router-dom'

export default function Create(){
  const { blogs,setBlogs } = useContext(BlogContext)
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const navigate = useNavigate()

  const handleCreate =() => {
    if (!title || !description) return alert('Please fill all fields')
    const newBlog = {
      id: blogs.length + 1,
      title,
      description,
    }
    setBlogs([...blogs, newBlog])
    navigate('/')
  }

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>← back</button>
      <h2>Create new blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e=> setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e=> setDescription(e.target.value)}
      />
      <button className="create-btn"onClick={handleCreate}>Create</button>
    </div>
  )
}
