import { Pressable, StyleSheet, Text } from 'react-native';

export default function BotonPrimario({ titulo, onPress }) {
  return (
    <Pressable style={({ pressed }) => [styles.boton, pressed && styles.presionado]} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: { backgroundColor: '#C62828', paddingVertical: 14, paddingHorizontal: 28, borderRadius: 10, alignItems: 'center' },
  presionado: { opacity: 0.8 },
  texto: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
