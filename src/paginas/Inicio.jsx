import { Link } from 'react-router-dom'
import './Inicio.css'

export default function Inicio() {
  return (
    <div className="pagina-inicio">
      <div className="inicio-hero">
        <span className="inicio-badge">Instituto Superior Del Milagro</span>
        <h1 className="inicio-titulo">
          Plataforma Académica de Cursos
        </h1>
        <p className="inicio-descripcion">
          Bienvenido al catálogo digital de formación continua. Descubre nuestra oferta académica
          actualizada en tiempo real mediante Supabase, con programas orientados al desarrollo
          profesional en tecnología y análisis de sistemas.
        </p>
        <div className="inicio-acciones">
          <Link to="/cursos" className="btn-explorar">
            Ver Catálogo de Cursos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      <div className="inicio-caracteristicas">
        <div className="caracteristica-card">
          <div className="caracteristica-icono">📚</div>
          <h3>Cursos Actualizados</h3>
          <p>Planes de estudio dinámicos con información detallada de profesores, niveles y cupos disponibles.</p>
        </div>
        <div className="caracteristica-card">
          <div className="caracteristica-icono">⚡</div>
          <h3>Base de Datos en Vivo</h3>
          <p>Conexión segura y en tiempo real a Supabase con control de acceso a nivel de fila (RLS).</p>
        </div>
        <div className="caracteristica-card">
          <div className="caracteristica-icono">🎓</div>
          <h3>Gestión Centralizada</h3>
          <p>Servicios modulares de consulta para obtener listas completas o detalles individuales de cada curso.</p>
        </div>
      </div>
    </div>
  )
}
