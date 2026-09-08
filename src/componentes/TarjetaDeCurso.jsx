import { Link } from 'react-router-dom'
import './TarjetaDeCurso.css'

export default function TarjetaDeCurso({ curso }) {
  if (!curso) return null

  return (
    <article className="tarjeta-curso">
      <div className="tarjeta-curso__header">
        <span className="tarjeta-curso__nivel">{curso.nivel || 'General'}</span>
        <span className="tarjeta-curso__cupo">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          Cupo: {curso.cupo}
        </span>
      </div>

      <h3 className="tarjeta-curso__titulo">{curso.nombre}</h3>

      {curso.profesor && (
        <p className="tarjeta-curso__profesor">
          <strong>Profesor:</strong> {curso.profesor}
        </p>
      )}

      {curso.descripcion && (
        <p className="tarjeta-curso__descripcion">
          {curso.descripcion}
        </p>
      )}

      <div className="tarjeta-curso__footer">
        <Link to={`/cursos/${curso.id}`} className="tarjeta-curso__btn-detalle">
          Ver detalle
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </article>
  )
}
