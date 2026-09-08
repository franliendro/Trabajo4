import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-badge">TP4</span>
          <span className="brand-title">Portal de Cursos</span>
        </Link>
        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-item nav-item--active' : 'nav-item'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/cursos"
            className={({ isActive }) =>
              isActive ? 'nav-item nav-item--active' : 'nav-item'
            }
          >
            Cursos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
