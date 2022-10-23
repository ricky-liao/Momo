import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';


export default function HomePage({ navigation }) {
  return (
    <View style={{flex: 1}}>
      <Text>Home</Text>
      <Button
        title="Camera"
        onPress={() => {
          navigation.navigate('Camera');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  }
});
