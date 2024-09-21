import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useFonts } from 'expo-font'
import StateNames from '../components/StateNames'
import { StateNames as states } from '../data/StateNames'


export default function Places() {

    useFonts({
        'Lexend-Regular': require('../../assets/fonts/Lexend-Regular.ttf'),
    })
  return (
    <View style={[styles.container]}>
        <ScrollView>
        <Text style={[styles.heading]}>States</Text>
        <View style={[styles.statesBox]}>
            {
                states.map((item) => (<StateNames stateName={item.name} bgColor={item.color} images={item.img}/>))
            }
        </View>
        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        fontFamily: "Lexend-Regular",
        backgroundColor: "white"
    },
    heading:{
        fontSize: 30,
        fontWeight: "400",
        marginLeft: 10,
        marginBottom: 10,
        fontFamily: "Lexend-Regular"
    },
    statesBox:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    }
})
