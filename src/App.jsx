import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Create from './pages/Create'
import BlogProvider from './context/BlogContext'

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  )
}

export default App
