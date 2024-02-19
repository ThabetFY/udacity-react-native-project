import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Row from "../common/row";
import { useRouter } from "expo-router";

const regions = [
  { id: "southwest", label: "South West" },
  { id: "northeast", label: "North East" },
  { id: "southeast", label: "South East" },
  { id: "northwest", label: "North West" },
  { id: "midwest", label: "Mid West" },
];

const Regions = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center gap-8 p-4">
      <TouchableOpacity onPress={() => router.push("new")}>
        <View className="mt-4 rounded-md bg-gray-800 p-4">
          <Text className="text-bold text-lg text-white">Add Customer</Text>
        </View>
      </TouchableOpacity>

      <Text className="text-2xl font-extrabold">Regions List</Text>

      <View className="w-full flex-1">
        {regions && regions.length > 0 ? (
          regions.map((region) => <Row key={region.id} item={region} />)
        ) : (
          <Text>{"No customers in any regions"}</Text>
        )}
      </View>
    </View>
  );
};

export default Regions;
