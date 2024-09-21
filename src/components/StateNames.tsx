import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

export default function StateNames({ stateName, bgColor, images }) {
  const [fontsLoaded] = useFonts({
    "lexend-regular": require("../../assets/fonts/Lexend-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null; // Or a loader/spinner until fonts load
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ImageBackground source={images} style={styles.bgImg} imageStyle={styles.Image}>
        <Text style={styles.stateName}>{stateName}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
 
  container:{
    margin: 10,
    borderRadius: 20
  },
  bgImg:{
    height: 100,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  Image:{
    borderRadius: 20
  },
  stateName:{
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    fontSize: 15,
    flexShrink: 1,
    flexWrap: "wrap"
  },
});
