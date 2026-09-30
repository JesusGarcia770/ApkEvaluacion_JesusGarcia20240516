import { StyleSheet, Text, View } from 'react-native';
import BotonPrimario from '../components/BotonPrimario';
import Card from '../components/Card';
import DatoEstudiante from '../components/DatoEstudiante';
import useEstudiante from '../hooks/useEstudiante';

export default function InfoEstudianteScreen({ navigation }) {
  const { datos, irAProductos } = useEstudiante(navigation);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Información del estudiante</Text>
      <Card style={styles.card}>
        {datos.map((d) => <DatoEstudiante key={d.etiqueta} {...d} />)}
      </Card>
      <BotonPrimario titulo="Ver productos" onPress={irAProductos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#FFF3EC' },
  titulo: { fontSize: 24, fontWeight: '800', marginBottom: 24 },
  card: { padding: 20, marginBottom: 24 },
});
