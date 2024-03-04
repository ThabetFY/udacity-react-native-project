import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "../common/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../common/Card";

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
      <Button
        label="Add Customer"
        size="lg"
        onPress={() => router.push("new")}
      />

      <Card className="w-10/12 items-center space-y-2 p-4">
        <CardHeader>
          <CardTitle className="text-center">Regions List</CardTitle>
        </CardHeader>
        <View className="border-primary-foreground w-10/12 border-2" />
        <CardContent className="gap-4">
          {regions && regions.length > 0 ? (
            regions.map((region) => (
              <Button
                size="lg"
                key={region.id}
                variant="secondary"
                label={region.label}
                onPress={() => {}}
              />
            ))
          ) : (
            <Text className="text-primary-foreground text-center font-bold">
              No customers in any regions
            </Text>
          )}
        </CardContent>
      </Card>
    </View>
  );
};

export default Regions;
