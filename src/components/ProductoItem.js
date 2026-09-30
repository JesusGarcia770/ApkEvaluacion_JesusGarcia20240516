import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORES } from '../config/tema';
import Card from './Card';

export default function ProductoItem({ producto }) {
  return (
    <Card style={styles.fila}>
      <Image source={{ uri: producto.image }} style={styles.imagen} resizeMode="contain" />
      <View style={styles.info}>
        <Text style={styles.nombre} numberOfLines={2}>{producto.title}</Text>
        <Text style={styles.categoria}>{producto.category}</Text>
        <Text style={styles.precio}>${producto.price.toFixed(2)}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  fila: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  imagen: { width: 90, height: 90, backgroundColor: '#fff' },
  info: { flex: 1, paddingLeft: 12 },
  nombre: { fontSize: 15, fontWeight: '700', color: COLORES.texto, marginBottom: 4 },
  categoria: { color: COLORES.textoSuave, textTransform: 'capitalize', marginBottom: 6 },
  precio: { fontSize: 18, fontWeight: '800', color: COLORES.primario },
});
