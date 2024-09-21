import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import Places from '../screens/Places'
import Season from '../screens/Season'
import Settings from '../screens/Settings'
import { useTheme } from '../theme/ThemeProvider'
import { useFonts } from 'expo-font'


const Tab = createBottomTabNavigator()

export default function BottomTab() {

  const {themeStyle} = useTheme()

  useFonts({
    'Lexend-Regular': require('../../assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Bold': require('../../assets/fonts/Lexend-Bold.ttf'),
  });

  return (
    <Tab.Navigator
     
    initialRouteName='Feed'
     screenOptions={({route}) =>({
      headerShown: false,
      tabBarIcon: ({focused}) => {
        

        let iconName;

        if(route.name === 'Feed')
        {
          iconName =  focused ? 
          require("../../assets/Icon-images/feed-active.png")
          :
          require("../../assets/Icon-images/feed-inactive.png")
        }
        else if(route.name === 'Places')
        {
          iconName =  focused ? 
          require("../../assets/Icon-images/places-active.png")
          :
          require("../../assets/Icon-images/places-inactive.png")
        }
        else if(route.name === 'Season')
        {
          iconName =  focused ? 
          require("../../assets/Icon-images/season-active.png")
          :
          require("../../assets/Icon-images/season-inactive.png")
        }
        else{
          iconName =  focused ? 
          require("../../assets/Icon-images/setting-active.png")
          :
          require("../../assets/Icon-images/setting-inactive.png")
        }
        
        return <Image source={iconName} style={{height: 25, width: 25}}/>

      },
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "grey",
      
      tabBarLabelStyle:{
        fontSize: 10,
        fontWeight: "900",
        textTransform: "none",
        fontFamily: "Lexend-Regular"
      },
     
      
     }
    
    )}
    
    >
      <Tab.Screen name='Feed' component={Feed}/>
      <Tab.Screen name='Places' component={Places}/>
      <Tab.Screen name='Season' component={Season}/>
      <Tab.Screen name='Settings' component={Settings}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    }
})
