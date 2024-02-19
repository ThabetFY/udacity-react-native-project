import { Regions } from "@/components";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

export default function ListRegions() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Regions />
      </ScrollView>
    </SafeAreaView>
  );
}
