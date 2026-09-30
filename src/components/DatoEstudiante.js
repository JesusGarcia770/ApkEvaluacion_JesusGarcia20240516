import { StyleSheet, Text } from 'react-native';

export default function DatoEstudiante({ etiqueta, valor }) {
  return <Text style={styles.linea}>{etiqueta}: {valor}</Text>;
}

const styles = StyleSheet.create({
  linea: { fontSize: 18, marginBottom: 10 },
});
