import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tab from './BottomTab';
import {StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusScreen from '../screens/StatusScreen';


const stack = createNativeStackNavigator();


export default function Stack() {
  return (
    <SafeAreaView style={[styles.container]}>
        <NavigationContainer>
        <stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <stack.Screen name="feed" component={Tab}/>
            <stack.Screen name="statusScreen" component={StatusScreen}/>
        </stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
