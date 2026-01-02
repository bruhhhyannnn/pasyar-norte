import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { categories } from '../data/categoriesData';
import { Icon, CustomCategoryCard, SafeAreaContainer } from '@/components/ui';

export default function RootHome() {
  return (
    <SafeAreaContainer>
      {/* Header Section */}
      <View className="flex-row items-center justify-between border-b border-slate-300 bg-slate-100 p-5">
        {/* App Name */}
        {/* TODO: add animation effect on emoji */}
        <Text className="text-xl font-bold">🗺️ Pasyar Norte</Text>

        {/* App info & Theme Functionality */}
        <View className="flex-row flex-wrap gap-4">
          <TouchableOpacity
            // TODO: create and add modal functionality
            onPress={() => {
              Alert.alert('Information button clicked!');
            }}>
            <Icon name="information-circle-outline" />
          </TouchableOpacity>
          <TouchableOpacity
            // TODO: create and add theme functionality
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
        <View className="flex-row flex-wrap gap-2">
          {categories.map((item, index) => (
            <CustomCategoryCard key={index} category={item.category} iconName={item.iconName} />
          ))}
        </View>
      </View>

      {/* Map Section */}
      <View className="flex-1 items-center justify-center">
        {/* TODO: add leaflet map viewer */}
        <Text>Map Section</Text>
      </View>
    </SafeAreaContainer>
  );
}
