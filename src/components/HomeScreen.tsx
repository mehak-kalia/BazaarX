import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { categories } from './products';


const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
          >
            {/* Display product name, image, and price */}
            item.icon
            <Text>{item.name}</Text>
            {/* <Text>{item.price}</Text> */}
            {/* Add product image */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

