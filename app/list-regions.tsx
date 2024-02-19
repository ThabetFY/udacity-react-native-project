import { SafeAreaView, ScrollView } from "react-native";
import { Regions } from "@/components";

export default function ListRegions() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Regions />
      </ScrollView>
    </SafeAreaView>
  );
}
