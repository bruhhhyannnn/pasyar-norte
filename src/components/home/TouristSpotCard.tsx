import { View, ScrollView } from 'react-native';
import { ThemedText, ThemedView, IconProps } from '@/components/ui';
import CategoryCard from '@/components/home/CategoryCard';

interface TouristSpotCardProps {
  name: string;
  description: string;
  icon: IconProps;
}

export default function TouristSpotCard({ name, description, icon }: TouristSpotCardProps) {
  return (
    <View className="px-12 py-1">
      <ThemedView variant="bg_light" className="h-full rounded-xl p-3">
        <ScrollView>
          <View className="flex-row items-center gap-2 ">
            <ThemedText variant="h300">{name}</ThemedText>
            <CategoryCard category="test" iconName="image-outline" />
          </View>
          <ThemedText>{description}</ThemedText>
        </ScrollView>
      </ThemedView>
    </View>
  );
}
