import { Icon, ThemedText, ThemedView } from '@/components/ui';
import { TouchableOpacity } from 'react-native';

interface DeveloperCardProps {
  name: string;
  portfolioLink: string;
}

export default function DeveloperCard({ name, portfolioLink }: DeveloperCardProps) {
  return (
    <TouchableOpacity
      className="w-[48%]"
      onPress={() => {
        // TODO: create a utils for opening links, safely. pass the portfolioLink there.
      }}>
      <ThemedView variant="bg_light" className="flex-row items-center gap-2 rounded-lg p-2.5">
        <ThemedText className="shrink text-center">{name}</ThemedText>
        <Icon name="chevron-forward-outline" size={16} />
      </ThemedView>
    </TouchableOpacity>
  );
}
