import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Row from "../common/row";

const regions = [
  { id: "southwest", label: "South West" },
  { id: "northeast", label: "North East" },
  { id: "southeast", label: "South East" },
  { id: "northwest", label: "North West" },
  { id: "midwest", label: "Mid West" },
];

const Form = () => {
  return (
    <View className="flex-1 items-center gap-8 p-4">
      <View className="w-10/12 items-center gap-2">
        <TextInput
          key={"first_name"}
          placeholder="First Name"
          onChangeText={(v) => {}}
          className="w-2/3 rounded-md border-2 border-gray-800 p-4"
        />

        <TextInput
          key={"last_name"}
          placeholder="Last Name"
          onChangeText={(v) => {}}
          className="w-2/3 rounded-md border-2 border-gray-800 p-4"
        />
      </View>

      <View className="w-10/12 border-2 border-gray-800" />

      <View className="w-10/12 items-center gap-2">
        <Text className="text-2xl font-extrabold">Active?</Text>
        <View className="w-1/2 border-2 border-gray-800" />
        <TouchableOpacity className="w-2/3" onPress={() => {}}>
          <View className="rounded-md bg-gray-800 p-4">
            <Text className="text-bold text-center text-lg text-white">
              Active
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="w-2/3" onPress={() => {}}>
          <View className="rounded-md bg-gray-800 p-4">
            <Text className="text-bold text-center text-lg text-white">
              In-active
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="w-10/12 border-2 border-gray-800" />

      <View className="w-10/12 items-center">
        <Text className="text-2xl font-extrabold">Region:</Text>
        <View className="w-1/2 border-2 border-gray-800" />

        <View className="w-2/3">
          {regions && regions.length > 0 ? (
            regions.map((region) => <Row key={region.id} item={region} />)
          ) : (
            <Text>{"No customers in any regions"}</Text>
          )}
        </View>
      </View>

      <View className="w-10/12 border-2 border-gray-800" />

      <TouchableOpacity className="w-2/3" onPress={() => {}}>
        <View className="mt-4 rounded-md bg-gray-800 p-4">
          <Text className="text-bold text-center text-lg text-white">
            submit
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
