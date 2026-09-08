# Trabajo Práctico 4 - Portal de Cursos

**Carrera:** Tecnicatura en Análisis de Sistemas Informáticos  
**Materia:** Desarrollo Web Semipresencial  
**Institución:** Instituto Superior Del Milagro  

---

## Características Implementadas

1. **Ruteo con `react-router-dom`**:
   - `/` : Inicio institucional con descripción y accesos rápidos.
   - `/cursos` : Listado dinámico de cursos con manejo de los 3 estados (cargando, error, lista de cursos).
   - `/cursos/:id` : Vista de detalle individual obteniendo el parámetro con `useParams()`.
   - `*` : Página 404 personalizada con enlace de retorno.
   - Barra de navegación (`Navbar`) visible en todas las pantallas con `NavLink` para resaltar la pestaña activa.

2. **Capa de Servicios**:
   - `src/servicios/cursos.js` centraliza las consultas a la base de datos:
     - `obtenerCursos()`: Retorna los cursos ordenados alfabéticamente por `nombre`.
     - `obtenerCursoPorId(id)`: Retorna un único curso como objeto.
   - **Cumplimiento de restricción estricta**: `supabaseClient` se importa única y exclusivamente en `src/servicios/cursos.js`. No se importa en ningún componente ni página.

3. **Base de Datos Supabase**:
   - Tabla `cursos` con columnas `id`, `nombre`, `profesor`, `nivel`, `cupo`, `descripcion` y `creado_en`.
   - Row Level Security (RLS) habilitado con política pública provisoria `using (true)`.
   - Script SQL autoejecutable provisto en `supabase_setup.sql`.

4. **Variables de Entorno**:
   - Variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
   - Archivo `.env.example` en el repositorio.
   - `.env` protegido e ignorado en `.gitignore`.

---

## Instrucciones para Poner en Marcha

### 1. Base de datos en Supabase
1. Ingresa a tu proyecto en [Supabase](https://supabase.com).
2. Abre el **SQL Editor** en el panel izquierdo.
3. Copia el contenido del archivo `supabase_setup.sql` de este proyecto y pégalo allí.
4. Presiona **Run**. Esto creará la tabla con sus restricciones, activará RLS con la política de lectura y cargará los 6 cursos de muestra.

### 2. Configuración de credenciales (.env)
1. En Supabase ve a **Project Settings > API**.
2. Copia la **Project URL** y la clave **anon / public**.
3. Abre el archivo `.env` en la raíz de este proyecto y asigna los valores:
   ```env
   VITE_SUPABASE_URL=https://tu-id-de-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY=tu-anon-key-aqui
   ```

### 3. Ejecutar la Aplicación
Instala las dependencias y corre el servidor de desarrollo:
```bash
npm install
npm run dev
```
Abre la URL indicada en la consola (usualmente `http://localhost:5173`) en tu navegador.
