import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Ejercicios Fundamentos',
          headerBackVisible: false 
        }} 
      />
    </Stack>
  );
}