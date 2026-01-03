import { Alert, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

interface CustomCategoryProps {
  category: string;
  iconName: string;
}

export default function CustomCategory({ category, iconName }: CustomCategoryProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert(`${category} category clicked!`);
      }}>
      <ThemedView
        variant="bg_light"
        className="flex-row flex-wrap items-center gap-2 rounded-2xl border border-slate-400 px-3 py-2">
        <Icon name={iconName} />
        <ThemedText variant="body_lg">{category}</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}
