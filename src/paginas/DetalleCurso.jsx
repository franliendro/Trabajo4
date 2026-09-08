import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { obtenerCursoPorId } from '../servicios/cursos'
import './DetalleCurso.css'

export default function DetalleCurso() {
  const { id } = useParams()
  const [curso, setCurso] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const cargarCurso = async () => {
    setCargando(true)
    setError(null)
    try {
      const data = await obtenerCursoPorId(id)
      setCurso(data)
    } catch (err) {
      console.error('Error al obtener el curso:', err)
      setError(err.message || 'No se pudo encontrar el curso especificado.')
    } finally {
      setCargando(false)
    }
  }

  useEffect(() => {
    if (id) {
      cargarCurso()
    }
  }, [id])

  return (
    <div className="pagina-detalle">
      <div className="detalle-nav-superior">
        <Link to="/cursos" className="btn-volver">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Volver a la lista de cursos
        </Link>
      </div>

      {/* ESTADO 1: Mientras carga */}
      {cargando && (
        <div className="estado-cargando">
          <div className="spinner"></div>
          <p>Cargando información del curso #{id}...</p>
        </div>
      )}

      {/* ESTADO 2: Si falla */}
      {error && !cargando && (
        <div className="estado-error">
          <div className="error-icono">⚠️</div>
          <h3>Error al cargar el curso</h3>
          <p className="error-mensaje">{error}</p>
          <div className="error-acciones">
            <button onClick={cargarCurso} className="btn-reintentar">
              Reintentar
            </button>
            <Link to="/cursos" className="btn-secundario">
              Ver otros cursos
            </Link>
          </div>
        </div>
      )}

      {/* ESTADO 3: Detalle con todos sus datos */}
      {!cargando && !error && curso && (
        <article className="detalle-card">
          <div className="detalle-header">
            <div className="detalle-etiquetas">
              <span className="detalle-badge-id">ID #{curso.id}</span>
              <span className="detalle-badge-nivel">{curso.nivel || 'Nivel General'}</span>
            </div>
            <h1 className="detalle-titulo">{curso.nombre}</h1>
          </div>

          <div className="detalle-cuerpo">
            <div className="detalle-info-grid">
              <div className="info-bloque">
                <span className="info-etiqueta">Docente a cargo</span>
                <span className="info-valor">{curso.profesor || 'A confirmar'}</span>
              </div>

              <div className="info-bloque">
                <span className="info-etiqueta">Cupo máximo</span>
                <span className="info-valor">{curso.cupo} alumnos</span>
              </div>

              <div className="info-bloque">
                <span className="info-etiqueta">Nivel formativo</span>
                <span className="info-valor">{curso.nivel || 'Estándar'}</span>
              </div>

              <div className="info-bloque">
                <span className="info-etiqueta">Fecha de registro</span>
                <span className="info-valor">
                  {curso.creado_en
                    ? new Date(curso.creado_en).toLocaleDateString('es-AR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : 'Sin registro'}
                </span>
              </div>
            </div>

            <div className="detalle-seccion">
              <h2 className="seccion-subtitulo">Descripción del Programa</h2>
              <p className="seccion-texto">
                {curso.descripcion || 'No se proporcionó una descripción detallada para este curso.'}
              </p>
            </div>
          </div>
        </article>
      )}
    </div>
  )
}
