import { Alert, TouchableOpacity, View } from 'react-native';
import { categories } from '@/data/categoriesData';
import {
  Icon,
  CustomCategoryCard,
  SafeAreaContainer,
  ThemedText,
  ThemedView,
} from '@/components/ui';

export default function RootHome() {
  return (
    <SafeAreaContainer>
      {/* Header Section */}
      <ThemedView
        variant="bg"
        className="flex-row items-center justify-between border-b border-slate-300 p-5">
        {/* App Name */}
        {/* TODO: add animation effect on emoji */}
        <ThemedText variant="h300">🗺️ Pasyar Norte</ThemedText>

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
      </ThemedView>

      {/* Category Section */}
      <ThemedView variant="bg" className="p-5">
        <ThemedText variant="h600">Plan your trip.</ThemedText>
        <View className="mt-2 flex-row flex-wrap gap-2">
          {categories.map((item, index) => (
            <CustomCategoryCard key={index} category={item.category} iconName={item.iconName} />
          ))}
        </View>
      </ThemedView>

      {/* Map Section */}
      <ThemedView className="flex-1 items-center justify-center">
        {/* TODO: add leaflet map viewer */}
        <ThemedText>Map Section</ThemedText>
      </ThemedView>
    </SafeAreaContainer>
  );
}
