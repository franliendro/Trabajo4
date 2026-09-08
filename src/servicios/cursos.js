import { supabase } from '../supabaseClient'

/**
 * Devuelve todos los cursos ordenados por nombre.
 * Lanza un error si la consulta falla; devuelve los datos limpios si tiene éxito.
 */
export async function obtenerCursos() {
  const { data, error } = await supabase
    .from('cursos')
    .select('*')
    .order('nombre', { ascending: true })

  if (error) {
    throw error
  }

  return data
}

/**
 * Devuelve un curso específico como objeto a partir de su ID.
 * Lanza un error si la consulta falla; devuelve los datos limpios si tiene éxito.
 */
export async function obtenerCursoPorId(id) {
  const { data, error } = await supabase
    .from('cursos')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    throw error
  }

  return data
}
