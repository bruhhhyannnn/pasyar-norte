import { Alert, TouchableOpacity } from 'react-native';
import { Icon, ThemedText, ThemedView } from '@/components/ui';

interface CategoryCardProps {
  category: string;
  iconName: string;
}

export default function CustomCategory({ category, iconName }: CategoryCardProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert(`${category} category clicked!`);
      }}>
      <ThemedView
        variant="bg_light"
        className="flex-row items-center gap-2 self-start rounded-full px-3 py-1">
        <Icon name={iconName} size={18} />
        <ThemedText variant="body_lg">{category}</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}
