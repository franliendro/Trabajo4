import { Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Inicio from './paginas/Inicio'
import ListaCursos from './paginas/ListaCursos'
import DetalleCurso from './paginas/DetalleCurso'
import NotFound from './paginas/NotFound'
import './App.css'

export default function App() {
  return (
    <div className="app-layout">
      {/* Barra de navegación visible en todas las pantallas */}
      <Navbar />

      {/* Contenido según la ruta actual */}
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<ListaCursos />} />
          <Route path="/cursos/:id" element={<DetalleCurso />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>Trabajo Práctico 4 &bull; Tecnicatura en Análisis de Sistemas Informáticos &bull; Desarrollo Web</p>
      </footer>
    </div>
  )
}
