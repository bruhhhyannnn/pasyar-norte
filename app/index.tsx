import '../global.css';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const preferences: string[] = [
  'Scenery',
  'Accessibility',
  'Affordability',
  'Cleanliness',
  'People',
  'Food',
  'Activity',
  'Accommodations',
  'Experience',
];

export default function RootHome() {
  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      {/* Header Section */}
      <View className="flex-row items-center justify-between border-b border-red-200 bg-slate-100 p-5">
        {/* App Name */}
        {/* todo: add animation effect on emoji */}
        <Text className="text-xl font-medium">🗺️ Pasyar Norte</Text>

        {/* App info & Theme Functionality */}
        <View className="flex-row flex-wrap gap-2">
          <View className="bg-slate-400 p-2">
            {/* todo: use actual icons */}
            <Text>Info Modal</Text>
          </View>
          <View className="bg-slate-400 p-2">
            {/* todo: use actual icons */}
            <Text>Dark Mode</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
