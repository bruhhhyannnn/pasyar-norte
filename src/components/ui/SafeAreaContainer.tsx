import { SafeAreaView } from 'react-native-safe-area-context';
import ThemedView from './ThemedView';

interface SafeAreaContainerProps {
  showPadding?: boolean;
  children: React.ReactNode;
}

export default function SafeAreaContainer({
  showPadding = false,
  children,
}: SafeAreaContainerProps) {
  return (
    <ThemedView className={showPadding ? 'p-5' : 'flex-1'}>
      <SafeAreaView edges={['top', 'left', 'right']} className="flex-1">
        {children}
      </SafeAreaView>
    </ThemedView>
  );
}
