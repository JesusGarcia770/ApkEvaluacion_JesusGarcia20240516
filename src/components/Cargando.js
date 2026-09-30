import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Cargando({ mensaje = 'Cargando...' }) {
  return (
    <View style={styles.centro}>
      <ActivityIndicator size="large" color="#C62828" />
      <Text style={styles.texto}>{mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  texto: { marginTop: 12, color: '#8A5A4E' },
});
