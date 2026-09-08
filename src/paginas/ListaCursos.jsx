import { useState, useEffect } from 'react'
import { obtenerCursos } from '../servicios/cursos'
import TarjetaDeCurso from '../componentes/TarjetaDeCurso'
import './ListaCursos.css'

export default function ListaCursos() {
  const [cursos, setCursos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const cargarCursos = async () => {
    setCargando(true)
    setError(null)
    try {
      const data = await obtenerCursos()
      setCursos(data || [])
    } catch (err) {
      console.error('Error al obtener cursos:', err)
      setError(err.message || 'Ocurrió un error inesperado al cargar los cursos.')
    } finally {
      setCargando(false)
    }
  }

  useEffect(() => {
    cargarCursos()
  }, [])

  return (
    <div className="pagina-cursos">
      <header className="cursos-header">
        <h1 className="cursos-titulo">Oferta de Cursos Disponibles</h1>
        <p className="cursos-subtitulo">
          Explora los cursos activos y conoce los detalles de cada especialización.
        </p>
      </header>

      {/* ESTADO 1: Mientras carga */}
      {cargando && (
        <div className="estado-cargando">
          <div className="spinner"></div>
          <p>Cargando cursos desde Supabase...</p>
        </div>
      )}

      {/* ESTADO 2: Si falla */}
      {error && !cargando && (
        <div className="estado-error">
          <div className="error-icono">⚠️</div>
          <h3>No se pudieron cargar los cursos</h3>
          <p className="error-mensaje">{error}</p>
          <button onClick={cargarCursos} className="btn-reintentar">
            Reintentar consulta
          </button>
        </div>
      )}

      {/* ESTADO 3: La lista */}
      {!cargando && !error && (
        <>
          {cursos.length === 0 ? (
            <div className="estado-vacio">
              <p>No hay cursos disponibles en este momento.</p>
            </div>
          ) : (
            <div className="grilla-cursos">
              {cursos.map((curso) => (
                <TarjetaDeCurso key={curso.id} curso={curso} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
