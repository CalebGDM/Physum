import React from "react";
import { View } from "react-native";
import { Svg, Circle } from 'react-native-svg'
import Colors from "../../constants/Colors";
import { getTheme } from "../Themed";

interface CircularProgressProps {
    size: number,
    strokeWidth: number,
    progress: number,
}

const CircularProgress = (props: CircularProgressProps) => {
  const { size, strokeWidth, progress } = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = (1 - progress) * 100;
  const theme = getTheme();

  return (
    <View style={{position: 'absolute'}}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle 
          stroke={Colors[theme].neutral[300]}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{strokeWidth}}
        />
        
        {/* Progress Circle */}
        <Circle 
          stroke={
                progress >= 1 ? Colors[theme].primary[500] : Colors[theme].secondary[500]
            }
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress/100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size/2}, ${size/2})`}
          {...{strokeWidth}}
        />
      </Svg>
    </View>
  )
}

export default CircularProgress;