import '@/styles/global.css';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colorScheme } from 'nativewind';
import { useEffect } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';

export default function RootLayout() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    colorScheme.set(theme);
  }, [theme]);

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'fade_from_bottom',
        }}
      />
    </SafeAreaProvider>
  );
}
