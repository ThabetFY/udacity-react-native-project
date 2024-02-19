import React from "react";
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
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 items-center p-24">
          <Text className="text-xl font-bold text-center">
            Welcome to Customer Manager Plus
          </Text>
          <TouchableOpacity
            onPress={() => router.push("list-regions")}
            className="bg-gray-800 rounded-md p-4 mt-4"
          >
            <Text className="text-white">Click to Continue...</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            className="bg-gray-800 rounded-md p-4 mt-4"
          >
            <Text className="text-white">Clear Storage...</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
