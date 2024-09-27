import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import Modal from 'react-native-modal';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/data/SampleData";
import Chart from "./components/Chart";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false); 
  const [selectedCoisns, setSelectedCoins] = useState(false); 

  const toggleModal = (item) => {
    setSelectedCoins(item)
    setModalVisible(!isModalVisible);
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
              priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
              logo={item.image}
              onPress={()=>toggleModal(item)}
            />
        )}
        ListHeaderComponent={<Header />}
      />

      <Modal 
        isVisible={isModalVisible} 
        onBackdropPress={toggleModal} 
        style={{ justifyContent: 'flex-end', margin: 0 }} 
      >
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <Text style={{ paddingVertical: 20 }}>
            { selectedCoisns ? 
              <Chart 
              name={selectedCoisns.name}
              currentPrice={selectedCoisns.current_price}
              priceChangePercentage7d={selectedCoisns.price_change_percentage_7d_in_currency}
              logo={selectedCoisns.image}
              symbol={selectedCoisns.symbol}
             sparkLine={selectedCoisns. sparkline_in_7d}
             /> : null
            }
           
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
