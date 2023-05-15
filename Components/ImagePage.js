import React from 'react';
import { View, Image } from 'react-native';
// import * as tf from '@tensorflow/tfjs';
// import { fetch, bundleResourceIO } from '@tensorflow/tfjs-react-native';

export default function ImagePage({ route }) {
  const { imageUri } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Other styles
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    // Other styles
  },
  // Other styles
};
