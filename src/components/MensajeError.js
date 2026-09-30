import { StyleSheet, Text, View } from 'react-native';
import BotonPrimario from './BotonPrimario';

export default function MensajeError({ mensaje, onReintentar }) {
  return (
    <View style={styles.centro}>
      <Text style={styles.error}>No se pudo cargar: {mensaje}</Text>
      <BotonPrimario titulo="Reintentar" onPress={onReintentar} />
    </View>
  );
}

const styles = StyleSheet.create({
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  error: { color: '#B71C1C', marginBottom: 16, textAlign: 'center' },
});
