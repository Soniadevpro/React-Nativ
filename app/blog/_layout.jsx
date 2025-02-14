import { Stack } from 'expo-router';

export default function BlogLayout() {
  return (
    <Stack>
  
      <Stack.Screen name="[slug]" options={{ title: 'Article' }} />
    </Stack>
  );
}