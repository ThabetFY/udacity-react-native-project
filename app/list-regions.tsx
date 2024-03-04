import { SafeAreaView, ScrollView } from "react-native";
import { Regions } from "@/components";

export default function ListRegions() {
  return (
    <SafeAreaView className="flex h-screen bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Regions />
      </ScrollView>
    </SafeAreaView>
  );
}
