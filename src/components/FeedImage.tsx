import React from 'react'
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';

export default function FeedImage({mainImage, userProfileImage, userName, annotation}) {


    
  useFonts({
    'Lexend-Regular': require('../../assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Bold': require('../../assets/fonts/Lexend-Bold.ttf'),
  });

    return (
        <View style={[styles.FeedImageBox]}>
            <View style={[styles.FeedImageParent]}>
                <ImageBackground
                    source={mainImage}
                    style={[styles.feedImage]}
                    borderRadius={20}
                >
                </ImageBackground>
            </View>

            <View style={[styles.userData]}>
                    <Image style={[styles.userProfile]} source={userProfileImage}/>
                    <Text style={[styles.userName]} adjustsFontSizeToFit>{userName.length > 4 ? userName.slice(0,4) + "...": userName}</Text>
            </View>

            {/* character limit is 153 */}
            <View style={[styles.annotation]}>
                <Text style={[styles.annotationText]} adjustsFontSizeToFit>{annotation}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    FeedImageBox: {
        height: 300,
        width: "98%",
        backgroundColor: "white",
        borderRadius: 20,
        elevation: 5,
        margin: 20
    },

    FeedImageParent:{
        height: 200,
        width: "100%"
    },
    feedImage: {
        height: "100%",
        width: "100%",
        borderRadius: 20
    },
    feedImageData: {
        backgroundColor: "grey",
        height: 300,
        width: "98%",
    },

    userData:{
        flexDirection: "row",
        top: 10,
        left: 10,
        width: "40%",
        justifyContent: "space-between" 
    },
    userProfile:{
        height: 20,
        width: 20,
        borderRadius: 50,
      },
      userName:{
        fontWeight: "500",
        fontSize: 14,
        fontFamily: 'Lexend-Regular',
        width: "80%"
      },
    annotation:{
        padding: 10,
        top: 10,
        
    },
    annotationText:{
        fontWeight: "600",
        fontFamily: 'Lexend-Regular',
    }
})