import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Lesson from "../../components/Lesson";
import lessons from "../../../assets/data/lessons";
import { getTheme } from "../../components/Themed";
import { GStyles } from "../../constants/GeneralStyles";
import Colors from "../../constants/Colors";
import useApplyHeaderWorkaround from "../../../hooks/useAplyHeaderWorks";
import { useNavigation } from "@react-navigation/native";

const LessonsScreen = () => {
  const theme = getTheme();
  const navigation = useNavigation();
  useApplyHeaderWorkaround(navigation.setOptions);
  const [renderIndex, setRenderIndex] = useState(0)
  return (
    <View
      style={[GStyles.screen, { backgroundColor: Colors[theme].background, justifyContent: 'center'}]}
    >
      <FlatList
        data={lessons}
        horizontal={false}
        renderItem={({item}) => <Lesson lesson={item}/>}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent: 'center'}}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default LessonsScreen;
