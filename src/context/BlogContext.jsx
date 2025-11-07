import React, { createContext, useState } from 'react'

export const BlogContext = createContext(null)

export default function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'First Blog', description:'This is the first blog post' },
    { id: 2, title: 'React Context', description:'Learn how to use Context API' },
    { id: 3, title: 'Hooks in React', description: 'Understanding useState and useEffect' },
  ])

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  )
}
