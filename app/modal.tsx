import { usePathname } from 'expo-router';
import { Text } from 'react-native';

export default function HomeScreen() {
  const pathname = usePathname();

  return (
    <Text style={{ marginTop: 40, fontWeight: 'bold' }}>
      Ruta activa actual: {pathname}
    </Text>
  );
}