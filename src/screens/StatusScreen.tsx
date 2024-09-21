import React from 'react'
import { View, Image, ImageBackground, Text, StyleSheet,} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

export default function StatusScreen() {
    const Route = useRoute()

    const { userName, statusImg, profileImg, } = Route.params

    return (
        <View style={[styles.container]}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
                source={statusImg}
                style={styles.img}
                imageStyle={styles.image}
            >
                <View style={[styles.userDetails]}>
                    <Image style={[styles.userProfile]} source={profileImg} />
                    <Text style={[styles.userName]} adjustsFontSizeToFit>{userName.length > 3 ? userName.slice(0, 5) : userName}</Text>
                </View>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    img: {
        height: "100%",
        width: "100%"
    },
    image: {
        width: "100%",
        height: "100%",
    },
    userDetails: {
        flexDirection: "row",
        left: 20,
        top: 10
    },
    userProfile: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    userName: {
        fontSize: 20,
        fontWeight: "600",
        color: "white",
        top: 6,
        left: 5,
        fontFamily: "lexend-Regular",
        width: "30%"
    }
})
