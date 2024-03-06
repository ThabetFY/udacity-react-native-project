import { SafeAreaView, ScrollView } from "react-native";
import { Regions } from "@/components";

export default function ListRegions() {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Regions />
      </ScrollView>
    </SafeAreaView>
  );
}
