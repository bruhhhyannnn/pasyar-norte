import { Text } from 'react-native';

interface ThemedTextProps {
  variant?: 'h900' | 'h600' | 'h300' | 'body_lg' | 'body' | 'body_sm';
  className?: string;
  children: React.ReactNode;
}

export default function ThemedText({ variant = 'body', className, children }: ThemedTextProps) {
  const variants = {
    h900: 'text-4xl font-bold',
    h600: 'text-3xl font-bold',
    h300: 'text-2xl font-medium',
    body_lg: 'text-lg font-medium',
    body: 'text-base',
    body_sm: 'text-sm',
  };

  // Detects custom color classes to avoid overriding customized colors
  const hasColorClass = className?.includes('color-') || className?.includes('text-');
  const baseColor = !hasColorClass ? 'color-slate-900 dark:color-slate-100' : '';

  return <Text className={`${className || ''} ${variants[variant]} ${baseColor}`}>{children}</Text>;
}
