import '../global.css';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/ui/Icon';

const categories = [
  { category: 'Scenery', iconName: 'image-outline' },
  { category: 'Accessibility', iconName: 'car-outline' },
  { category: 'Affordability', iconName: 'cash-outline' },
  { category: 'Cleanliness', iconName: 'color-wand-outline' },
  { category: 'People', iconName: 'people-outline' },
  { category: 'Food', iconName: 'fast-food-outline' },
  { category: 'Activity', iconName: 'pulse-outline' },
  { category: 'Accommodations', iconName: 'business-outline' },
  { category: 'Experience', iconName: 'star-outline' },
];

export default function RootHome() {
  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      {/* Header Section */}
      <View className="flex-row items-center justify-between border-b border-slate-300 bg-slate-100 p-5">
        {/* App Name */}
        {/* todo: add animation effect on emoji */}
        <Text className="text-xl font-bold">🗺️ Pasyar Norte</Text>

        {/* App info & Theme Functionality */}
        <View className="flex-row flex-wrap gap-4">
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Information button clicked!');
            }}>
            <Icon name="information-circle-outline" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Dark mode clicked!');
            }}>
            <Icon name="sunny-outline" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Category Section */}
      <View className="bg-slate-100 p-5">
        <Text className="mb-2 text-2xl font-extrabold">Plan your trip.</Text>
        <View className="flex-row flex-wrap">
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="w-1/2 p-1"
              onPress={() => {
                Alert.alert(`${item.category} category clicked!`);
              }}>
              <View className="items-center rounded-lg border border-slate-400 bg-slate-50 p-5">
                <View className="absolute right-2 top-2">
                  <Icon
                    name="checkbox-blank-circle-outline"
                    family="MaterialCommunityIcons"
                    size={20}
                  />
                  <Icon name="check-circle" family="MaterialCommunityIcons" size={20} />
                </View>
                <Icon name={item.iconName} />
                <Text className="text-lg font-semibold">{item.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Map Section */}
      <View className="flex-1 items-center justify-center">
        <Text>Map Section</Text>
      </View>
    </SafeAreaView>
  );
}
