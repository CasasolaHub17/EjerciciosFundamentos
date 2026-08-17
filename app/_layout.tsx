import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Ejercicios Fundamentos',
          headerBackVisible: false // Oculta la flecha hacia atrás
        }} 
      />
    </Stack>
  );
}