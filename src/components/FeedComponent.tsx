import React from 'react'
import { View,Text, StyleSheet, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'

export default function FeedComponent({userName, statusImg, profileImg,}) {

  const navigation = useNavigation();

  useFonts({
    'lexend-Regular' : require("../../assets/fonts/Lexend-Regular.ttf")
  })
  return (
   <TouchableWithoutFeedback
   onPress={()=> navigation.navigate("statusScreen", {userName, statusImg, profileImg,})}
   >
     <View style={styles.feedBox}>
        <ImageBackground borderRadius={20} style={styles.status} source={statusImg}>
        <View style={[styles.userDetails]}>
          <Image style={[styles.userProfile]} source={profileImg}/>
          <Text style={[styles.userName]} adjustsFontSizeToFit>{userName.length > 3 ? userName.slice(0,5): userName}</Text>
        </View>
        </ImageBackground>
       
    </View>
   </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  feedBox:{
    height: 150,
    width: 100,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 20,
  },
  status:{
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },

  userDetails:{
    flexDirection: "row",
    left: -20,
    top: -10
  },
  userProfile:{
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  userName:{
    fontSize: 10,
    fontWeight: "600",
    color: "white",
    top: 2,
    left: 5,
    fontFamily: "lexend-Regular",
    width: "30%"
  }
})