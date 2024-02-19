import { Welcome } from "components";
import { SafeAreaView, ScrollView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  );
}
