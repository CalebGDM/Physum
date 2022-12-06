import { Platform, StyleSheet } from "react-native";

export const Title = StyleSheet.create({
    Principal: {
        fontFamily: 'fredoka',
        fontSize: Platform.OS == "ios" ? 40 :  34
    },
    Secondary: {
        fontFamily: 'fredoka',
        fontSize: Platform.OS == "ios" ? 32 :  25
    },
    Section: {
        fontFamily: 'fredoka',
        fontSize: Platform.OS == "ios" ? 24 :  22
    },
    Item: {
        fontFamily: 'fredoka',
        fontSize: 20
    },
})

export const NormalText = StyleSheet.create({
    Light: {
        fontFamily: 'nunito-regular',
        fontSize: 16
    },
    Regular: {
        fontFamily: 'nunito-medium',
        fontSize: 16
    },
    Bold: {
        fontFamily: 'nunito-bold',
        fontSize: 16
    },
})

export const SmallText = StyleSheet.create({
    Light: {
        fontFamily: 'nunito-regular',
        fontSize: 14
    },
    Regular: {
        fontFamily: 'nunito-medium',
        fontSize: 14
    },
    Bold: {
        fontFamily: 'nunito-bold',
        fontSize: 14
    },
})