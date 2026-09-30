import { useCallback } from 'react';
import { ESTUDIANTE } from '../config/estudiante';

export default function useEstudiante(navigation) {
  const irAProductos = useCallback(() => navigation.navigate('Productos'), [navigation]);
  const datos = [
    { etiqueta: 'Nombre', valor: ESTUDIANTE.nombre },
    { etiqueta: 'Carnet', valor: ESTUDIANTE.carnet },
    { etiqueta: 'Sección', valor: ESTUDIANTE.seccion },
    { etiqueta: 'Grupo', valor: ESTUDIANTE.grupo },
  ];
  return { datos, irAProductos };
}
