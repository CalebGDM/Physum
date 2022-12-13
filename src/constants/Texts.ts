import { Platform, StyleSheet } from "react-native";

export const Title = StyleSheet.create({
    MegaTitle: {
        fontSize: Platform.OS == "ios" ? 64 :  45,
        fontFamily: 'fredoka',
    },
    Principal: {
        fontFamily: 'fredoka',
        fontSize: Platform.OS == "ios" ? 40 :  34
    },
    Secondary: {
        fontFamily: 'fredoka',
        fontSize: Platform.OS == "ios" ? 32 :  24
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

export const Forms = StyleSheet.create({
    Title: {
        fontFamily: 'fredoka',
        fontSize: Platform.OS == "ios" ? 50 : 30,
    },
    
    Input: {
        fontFamily: 'fredoka',
        fontSize: Platform.OS == "ios" ? 28 :  15
    },
})

export const NormalText = StyleSheet.create({
    Light: {
        fontFamily: 'nunito-regular',
        fontSize: Platform.OS ==  'ios' ? 16 : 14
    },
    Regular: {
        fontFamily: 'nunito-medium',
        fontSize: Platform.OS ==  'ios' ? 16 : 14
    },
    Bold: {
        fontFamily: 'nunito-bold',
        fontSize: Platform.OS ==  'ios' ? 16 : 14
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