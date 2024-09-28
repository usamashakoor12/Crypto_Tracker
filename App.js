import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import BottomSheet from "react-native-simple-bottom-sheet";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/data/SampleData";
import Chart from "./components/Chart";

export default function App() {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const panelRef = useRef(null); 

  const toggleModal = (item) => {
    setSelectedCoin(item);
    panelRef.current.togglePanel();
  };

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
            onPress={() => toggleModal(item)}
          />
        )}
        ListHeaderComponent={<Header />}
      />

     
      <BottomSheet ref={panelRef}>
        {selectedCoin ? (
          <Chart
            name={selectedCoin.name}
            currentPrice={selectedCoin.current_price}
            priceChangePercentage7d={
              selectedCoin.price_change_percentage_7d_in_currency
            }
            logo={selectedCoin.image}
            symbol={selectedCoin.symbol}
            sparkLine={selectedCoin.sparkline_in_7d}
          />
        ) : null
        }
      </BottomSheet>
    </SafeAreaView>
  );
}
