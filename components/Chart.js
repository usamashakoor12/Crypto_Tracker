import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Chart({ name, symbol, sparkLine, logo, priceChangePercentage7d, currentPrice }) {
  return (
    <View className="p-4 bg-white rounded-lg shadow">
      <View>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <Image source={{ uri: logo }} className="w-10 h-10 rounded-full" />
            <Text className="text-lg font-bold">
              {name} ({symbol})
            </Text>
          </View>
          <Text className="text-gray-500">7d</Text>
        </View>
      </View>

      <View className="mt-3 ml-3 flex-row items-center justify-between">
        <Text className="text-xl font-semibold text-black">
          ${currentPrice.toLocaleString('en-US', { currency: 'USD' })}
        </Text>
        <Text className={`text-lg ${priceChangePercentage7d >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {priceChangePercentage7d.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
}
