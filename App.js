import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { COLORES } from './src/config/tema';
import InfoEstudianteScreen from './src/screens/InfoEstudianteScreen';
import ProductosScreen from './src/screens/ProductosScreen';

const Stack = createNativeStackNavigator();

const opciones = {
  headerStyle: { backgroundColor: COLORES.primario },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: '700' },
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName="Estudiante" screenOptions={opciones}>
        <Stack.Screen name="Estudiante" component={InfoEstudianteScreen} />
        <Stack.Screen name="Productos" component={ProductosScreen} options={{ title: 'Productos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
