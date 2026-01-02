import { Alert, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import ThemedText from './ThemedText';

interface CustomCategoryProps {
  category: string;
  iconName: string;
}

export default function CustomCategory({ category, iconName }: CustomCategoryProps) {
  return (
    <TouchableOpacity
      className="flex-row flex-wrap items-center gap-2 rounded-2xl border border-slate-400 bg-slate-50 px-3 py-2"
      onPress={() => {
        Alert.alert(`${category} category clicked!`);
      }}>
      <Icon name={iconName} />
      <ThemedText variant="body_lg">{category}</ThemedText>
    </TouchableOpacity>
  );
}
