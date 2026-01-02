import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface IconProps {
  name: string;
  family?: 'Ionicons' | 'MaterialCommunityIcons';
  size?: number;
  color?: string;
}

export default function Icon({ name, family = 'Ionicons', size = 24, color }: IconProps) {
  return family === 'Ionicons' ? (
    <Ionicons name={name as any} size={size} color={color} />
  ) : (
    <MaterialCommunityIcons name={name as any} size={size} color={color} />
  );
}
