import { SafeAreaView, ScrollView } from "react-native";
import { NewForm } from "components";

export default function New() {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <NewForm />
      </ScrollView>
    </SafeAreaView>
  );
}
