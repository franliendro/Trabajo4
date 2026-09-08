import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="pagina-404">
      <div className="card-404">
        <span className="error-codigo">404</span>
        <h1 className="error-titulo">Página no encontrada</h1>
        <p className="error-descripcion">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link to="/" className="btn-volver-inicio">
          Volver a la Página Principal
        </Link>
      </div>
    </div>
  )
}
