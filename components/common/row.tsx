import { View, Text, TouchableOpacity } from "react-native";

const Row = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View key={item.id} className="m-2 rounded-md bg-gray-800 p-10">
        <Text className="text-center text-lg font-bold text-white">
          {item.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
