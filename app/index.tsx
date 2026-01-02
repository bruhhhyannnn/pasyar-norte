import '../global.css';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories } from '../data/categoriesData';
import { Icon, CustomCategoryCard } from '../components/ui';

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
            <CustomCategoryCard key={index} category={item.category} iconName={item.iconName} />
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
