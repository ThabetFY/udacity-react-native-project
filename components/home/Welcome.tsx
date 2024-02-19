import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center p-24">
      <Text className="text-center text-xl font-bold">
        Welcome to Customer Manager Plus
      </Text>
      <TouchableOpacity
        onPress={() => router.push("list-regions")}
        className="mt-4 rounded-md bg-gray-800 p-4"
      >
        <Text className="text-white">Click to Continue...</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {}}
        className="mt-4 rounded-md bg-gray-800 p-4"
      >
        <Text className="text-white">Clear Storage...</Text>
      </TouchableOpacity>
    </View>
  );
}
