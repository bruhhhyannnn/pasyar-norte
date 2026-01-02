import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SafeAreaContainerProps {
  showPadding?: boolean;
  children: React.ReactNode;
}

export default function SafeAreaContainer({
  showPadding = false,
  children,
}: SafeAreaContainerProps) {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      className={showPadding ? 'p-5' : 'flex-1 bg-slate-200'}>
      {children}
    </SafeAreaView>
  );
}
