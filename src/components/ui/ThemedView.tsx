import { View, ViewProps } from 'react-native';
import { useShadows } from '@/styles/shadow';

interface ThemedViewProps extends ViewProps {
  variant?: 'bg_dark' | 'bg' | 'bg_light';
  className?: string;
  children: React.ReactNode;
}

export default function ThemedView({
  variant = 'bg_dark',
  className,
  children,
  ...props
}: ThemedViewProps) {
  const shadow = useShadows();

  const variants = {
    bg_dark: 'bg-slate-200 dark:bg-slate-950',
    bg: 'bg-slate-100 dark:bg-slate-900',
    bg_light: 'bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70',
  };

  return (
    <View
      className={`${variants[variant]} ${className || ''}`}
      {...props}
      style={variant === 'bg_light' && shadow.card}>
      {children}
    </View>
  );
}
