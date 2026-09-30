import { FlatList, StyleSheet } from 'react-native';
import Cargando from '../components/Cargando';
import MensajeError from '../components/MensajeError';
import ProductoItem from '../components/ProductoItem';
import { COLORES } from '../config/tema';
import useProductos from '../hooks/useProductos';

export default function ProductosScreen() {
  const { productos, cargando, error, recargar } = useProductos();

  if (cargando) return <Cargando mensaje="Cargando productos..." />;
  if (error) return <MensajeError mensaje={error} onReintentar={recargar} />;

  return (
    <FlatList
      style={styles.lista}
      contentContainerStyle={styles.contenido}
      data={productos}
      keyExtractor={(p) => String(p.id)}
      renderItem={({ item }) => <ProductoItem producto={item} />}
    />
  );
}

const styles = StyleSheet.create({
  lista: { backgroundColor: COLORES.fondo },
  contenido: { padding: 16 },
});
