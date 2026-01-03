// Using custom shadow since tailwind is not compatible with shadows natively.
import { Platform, StyleSheet } from 'react-native';

export function useShadows() {
  return StyleSheet.create({
    card: {
      // TODO: use actual external and unified color palette here
      shadowColor: '#1e293b',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: Platform.OS === 'ios' ? 0.18 : 0.12,
      shadowRadius: Platform.OS === 'ios' ? 10 : 6,
      elevation: Platform.OS === 'android' ? 3 : 0,
    },
  });
}
