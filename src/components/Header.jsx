import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Blogs</Link>
        <Link to="/create">Create</Link>
      </nav>
    </header>
  )
}
