import { View, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { getTheme } from "../Themed";

interface ProgressBarProps{
    progress: number
}

const ProgressBar = ({progress,style }: ProgressBarProps) => {
    const theme = getTheme()
  return (
    <View
      style={[
        styles.progressBar,
        { backgroundColor: Colors[theme].neutral[100] },
        style as any
      ]}
    >
      <View
        style={[
          styles.progress,
          {
            backgroundColor: Colors[theme].secondary[400],
            width: `${Math.max(10, progress * 100)}%`,
          },
        ]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
    progressBar: {
        width: '100%',
        height: 20,
        borderRadius: 20,
        marginRight: 10,
    },
    progress:{
        height: 20,
        borderRadius: 20,
        marginRight: 10,
    }
})

export default ProgressBar;
