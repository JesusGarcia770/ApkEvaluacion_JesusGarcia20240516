import { useCallback, useEffect, useState } from 'react';

const API_URL = 'https://fakestoreapi.com/products';

export default function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    setError(null);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
      setProductos(await res.json());
    } catch (e) {
      setError(e.message);
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  return { productos, cargando, error, recargar: cargar };
}
