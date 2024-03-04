import { Welcome } from "@/components";
import { SafeAreaView, ScrollView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex h-screen bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          paddingBottom: 100,
        }}
      >
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  );
}
