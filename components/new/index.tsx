import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { RadioGroup, RadioGroupItem } from "../common/RadioGroup";

const regions = [
  { id: "southwest", label: "South West" },
  { id: "northeast", label: "North East" },
  { id: "southeast", label: "South East" },
  { id: "northwest", label: "North West" },
  { id: "midwest", label: "Mid West" },
];

const Form = () => {
  return (
    <View className="flex-1 items-center gap-6 p-4">
      <View>
        <Input
          label="First Name"
          placeholder="Enter your first name"
          className="my-2"
        />
        <Input
          label="Last Name"
          placeholder="Enter your last name"
          className="my-2"
        />
      </View>

      <View className="w-10/12 border-2 border-primary" />

      <View className="w-10/12 items-center gap-2">
        <Text className="text-2xl font-extrabold text-primary">Active?</Text>
        <View className="w-1/2 border-2 border-primary" />
        <View className="w-1/3 p-2">
          <RadioGroup defaultValue="active">
            <RadioGroupItem value="active" label="Active" />
            <RadioGroupItem value="inactive" label="In-active" />
          </RadioGroup>
        </View>
      </View>

      <View className="w-10/12 border-2 border-primary" />

      <View className="w-10/12 items-center">
        <Text className="text-2xl font-extrabold text-primary">Region:</Text>
        <View className="w-1/2 border-2 border-primary" />
        <View className="w-1/3 p-2">
          <RadioGroup defaultValue={regions[0].id}>
            {regions.map((region) => (
              <RadioGroupItem
                key={region.id}
                value={region.id}
                label={region.label}
              />
            ))}
          </RadioGroup>
        </View>
      </View>

      <View className="w-10/12 border-2 border-primary" />

      <Button label="Submit" size="lg" className="w-2/3" onPress={() => {}} />
    </View>
  );
};

export default Form;
