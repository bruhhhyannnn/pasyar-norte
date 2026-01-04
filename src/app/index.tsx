import { TouchableOpacity, View } from 'react-native';
import { categories } from '@/data/categoriesData';
import { useThemeStore } from '@/stores/useThemeStore';
import { useState } from 'react';
import { InfoModal } from '@/components/home';
import {
  Icon,
  CustomCategoryCard,
  SafeAreaContainer,
  ThemedText,
  ThemedView,
} from '@/components/ui';

export default function RootHome() {
  // App info modal
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  // Theme Functionality
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <SafeAreaContainer>
      {/* Header Section */}
      <ThemedView
        variant="bg"
        className="flex-row items-center justify-between border-b border-slate-200 p-5 dark:border-slate-700/70 ">
        {/* App Name */}
        {/* TODO: add animation effect on emoji */}
        <ThemedText variant="h300">🗺️ Pasyar Norte</ThemedText>

        {/* App info modal & Theme Functionality */}
        <View className="flex-row gap-4">
          <TouchableOpacity
            onPress={() => {
              setIsInfoModalOpen(true);
            }}>
            <Icon name="information-circle-outline" size={22} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleTheme}>
            <Icon name={theme === 'dark' ? 'sunny-outline' : 'moon-outline'} size={22} />
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

      {/* App info modal */}
      <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
    </SafeAreaContainer>
  );
}
