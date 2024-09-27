import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Chart({name,symbol,sparkLine,logo,priceChangePercentage7d,currentPrice}) {
  
  return (
     <View style="TitleWrapper"> 
        <View className="flex-row justify-between items-center">
            <View style="UperLeftTitle">
                <Image source={{uri: logo}} />
                <Text>{name} ({symbol})</Text>
            </View>
            <Text style="subTitle">7d</Text>
        </View>
        <View style="LoyerTitle">
            <Text>${currentPrice.toLocaleString('en-US',{currency: 'USD'})}</Text>
            <Text>{priceChangePercentage7d.toFixed(2)}%</Text>
        </View>
     </View>
  )
}