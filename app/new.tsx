import { SafeAreaView, ScrollView } from "react-native";
import { NewForm } from "components";

export default function New() {
  return (
    <SafeAreaView>
      <ScrollView>
        <NewForm />
      </ScrollView>
    </SafeAreaView>
  );
}
