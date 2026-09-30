import { StyleSheet, View } from 'react-native';

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 10, marginBottom: 12, elevation: 2, overflow: 'hidden' },
});
