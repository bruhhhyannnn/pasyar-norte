// Using custom shadow since tailwind is not compatible with shadows natively.

import { useThemeStore } from '@/stores/useThemeStore';
import { Platform, StyleSheet } from 'react-native';

export function useShadows() {
  const theme = useThemeStore((state) => state.theme);

  return StyleSheet.create({
    card: {
      // TODO: use actual external and unified color palette here
      shadowColor: theme === 'light' ? '#1e293b' : '#94a3b8',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: Platform.OS === 'ios' ? 0.18 : 0.12,
      shadowRadius: Platform.OS === 'ios' ? 10 : 6,
      elevation: Platform.OS === 'android' ? 3 : 0,
    },
  });
}
