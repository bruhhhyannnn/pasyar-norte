import { Alert, Text, TouchableOpacity, View } from 'react-native';
import Icon from './Icon';

interface CustomCategoryProps {
  category: string;
  iconName: string;
}

export default function CustomCategory({ category, iconName }: CustomCategoryProps) {
  return (
    <TouchableOpacity
      className="w-1/2 p-1"
      onPress={() => {
        Alert.alert(`${category} category clicked!`);
      }}>
      <View className="items-center rounded-lg border border-slate-400 bg-slate-50 p-5">
        <View className="absolute right-2 top-2">
          <Icon name="checkbox-blank-circle-outline" family="MaterialCommunityIcons" size={20} />
          <Icon name="check-circle" family="MaterialCommunityIcons" size={20} />
        </View>
        <Icon name={iconName} />
        <Text className="text-lg font-semibold">{category}</Text>
      </View>
    </TouchableOpacity>
  );
}
