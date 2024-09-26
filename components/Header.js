import { View, Text } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View className="flex-1">
      <View className="px-6 mt-12">
        <Text className="text-lg font-bold border-b-2 py-2">Markets</Text>
      </View>
    </View>
  );
}
