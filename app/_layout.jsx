import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Accueil' }} />
      <Stack.Screen name="about" options={{ title: 'À propos' }} />
      <Stack.Screen name="profile/[id]" options={{ title: 'Profil' }} />
    </Stack>
  );
}
