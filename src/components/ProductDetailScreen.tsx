import React from 'react';
import { View, Text } from 'react-native';

const ProductDetailScreen = ({ route }: any) => {
  const { productId } = route.params;

  // Fetch product details by productId

  return (
    <View>
      <Text>Product Detail Screen</Text>
      {/* Display product name, image, price, and description */}
    </View>
  );
};

export default ProductDetailScreen;
