import { Modal, TouchableOpacity, View } from 'react-native';
import { Icon, ThemedText, ThemedView } from '@/components/ui';
import { SimpleLineIcons } from '@expo/vector-icons';
import DeveloperCard from '@/components/home/DeveloperCard';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  return (
    <Modal visible={isOpen} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View className="absolute inset-0 items-center justify-center bg-black/80">
        <ThemedView variant="bg" className="w-[80%] gap-2 rounded-2xl">
          <TouchableOpacity className="absolute -right-4 -top-4 z-10" onPress={onClose}>
            <ThemedView variant="bg_light" className="rounded-full p-1">
              <Icon name="close-outline" />
            </ThemedView>
          </TouchableOpacity>

          {/* About Pasyar Norte */}
          {/* TODO: make this as gradient */}
          <View className="gap-1 rounded-t-2xl bg-violet-500 p-6">
            <ThemedText variant="h900" className="text-center">
              PasyarNorte
            </ThemedText>
            <ThemedText className="text-center">
              Aspect-Based Analysis of Tourist Reviews for a Preference-Aware Recommendation for the
              Province of Ilocos Norte Destinations
            </ThemedText>
          </View>

          {/* Powered by ABSA */}
          <View className="border-b border-slate-200 px-4 pb-4 pt-8 dark:border-slate-700/70">
            <ThemedView
              variant="bg_light"
              className="absolute -top-7 items-center self-center rounded-3xl p-2">
              {/* TODO: make this as gradient */}
              <View className="flex-row items-center gap-2 rounded-xl bg-yellow-500 px-4 py-0.5">
                {/* TODO: call from actual color palette not hardcoded values here */}
                <SimpleLineIcons name="graduation" color={'#f1f5f9'} size={16} />
                <ThemedText variant="body" className="font-bold">
                  OFFICIAL THESIS PROJECT
                </ThemedText>
              </View>
            </ThemedView>
            <View className="gap-1">
              <ThemedText variant="h300" className="text-center">
                Powered by ABSA
              </ThemedText>
              <ThemedText className="text-center">
                Our system uses Aspect-Based Sentiment Analysis (ABSA) on thousands of reviews.
                Unlike standard maps, we understand context—knowing if a user loves the
                &quot;Food&quot; but hates the &quot;Roads.&quot;
              </ThemedText>
            </View>
          </View>

          {/* Developers & Researchers */}
          <View className=" gap-3 p-4">
            <View className="flex-row items-center justify-center gap-1">
              <ThemedText variant="body_lg">CRAFTED WITH</ThemedText>
              <Icon name="heart" size={12} color="#ef4444" />
              <ThemedText variant="body_lg">BY</ThemedText>
            </View>
            <View className="flex-row flex-wrap gap-3">
              <DeveloperCard
                name="Christian Andrei Arzadon"
                portfolioLink="https://www.arzadonchristian.dev"
              />
              <DeveloperCard name="Carl Dominic Doño" portfolioLink="" />
              <DeveloperCard
                name="Fritzjerald Domingo"
                portfolioLink="https://www.facebook.com/KiriSakiKyoutaro"
              />
              <DeveloperCard
                name="Mhar Justine Torres"
                portfolioLink="https://www.facebook.com/mharjustine.torres.1"
              />
            </View>
          </View>
        </ThemedView>
      </View>
    </Modal>
  );
}
