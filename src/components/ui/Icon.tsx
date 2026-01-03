import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';

interface IconProps {
  name: string;
  family?: 'Ionicons' | 'MaterialCommunityIcons';
  size?: number;
  color?: string;
}

export default function Icon({ name, family = 'Ionicons', size = 24, color }: IconProps) {
  const theme = useColorScheme().colorScheme;
  // TODO: use actual external and unified color palette here
  const variants = theme === 'light' ? '#0f172a' : '#f1f5f9';

  return family === 'Ionicons' ? (
    <Ionicons name={name as any} size={size} color={color ?? variants} />
  ) : (
    <MaterialCommunityIcons name={name as any} size={size} color={color ?? variants} />
  );
}
