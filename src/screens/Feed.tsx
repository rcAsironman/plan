import React, { useState } from 'react'
import { View,Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import  {useTheme} from '../theme/ThemeProvider'
import FeedComponent from '../components/FeedComponent'
import {statusData} from "../data/Status"
import FeedImage from '../components/FeedImage'
import { FeedImagesData } from '../data/FeedImages'
import { useFonts } from 'expo-font'

export default function Feed() {

    const {theme, toogle, themeStyle} = useTheme()
    useFonts({
        'lexend-Regular' : require("../../assets/fonts/Lexend-Regular.ttf")
      })
  return (
    <View style={[styles.container,{backgroundColor: themeStyle.backgroundColor}]}>
      <ScrollView 
      showsVerticalScrollIndicator = {false}
      >
        <Text style={[styles.heading]}>Status</Text>
       <FlatList
         data={statusData}
         renderItem={(item) => <FeedComponent userName={item.item.userName} profileImg={item.item.profile} statusImg={item.item.img} />}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         style={{
            backgroundColor: "white"
         }}
       />
     
      <View style={{justifyContent: "center", alignItems: "center", flex: 1, }}>
        {
            FeedImagesData.map((item, key) =>(<FeedImage key={key} mainImage={item.img} userProfileImage={item.profile} userName={item.name} annotation={item.annotation}/>))
        }
      </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        padding: 10
    },
    heading:{
        fontSize: 30,
        fontWeight: "400",
        marginLeft: 10,
        marginBottom: 10,
        fontFamily: "lexend-Regular"
    }
})