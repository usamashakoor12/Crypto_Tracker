import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function ListItem({name, symbol,currentPrice,priceChangePercentage7d,logo, onPress}) {

    const priceChangeColor = priceChangePercentage7d > 0 ? 'text-green-400' : 'text-red-400'

  return (
    <TouchableOpacity onPress={onPress}>
      <View className="px-5 mt-6 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Image source={{uri:logo}} className="h-12 w-12" />
          <View className="ml-2">
            <Text className="text-lg font-normal">{name}</Text>
            <Text className="text-sm text-gray-400">{symbol.toUpperCase()}</Text>
          </View>
        </View>
        <View className="items-end">
          <Text className="text-base font-normal">${currentPrice.toLocaleString('en-US',{currency: 'USD'})}</Text>
          <Text className={priceChangeColor}>{priceChangePercentage7d.toFixed(2)}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
