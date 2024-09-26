import { View, Text, FlatList, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/data/SampleData";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        keyExtractor={(item) => item.id}
        data={SAMPLE_DATA}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={
              item.price_change_percentage_7d_in_currency
            }
            logo={item.image}
          />
        )}
        ListHeaderComponent={ <Header />}
      />
      
    </SafeAreaView>
  );
}
