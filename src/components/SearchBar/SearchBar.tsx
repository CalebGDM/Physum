import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./StylesSearchBar";
import Colors from "../../constants/Colors";
import { getTheme } from "../Themed";
import { NormalText } from "../../constants/Texts";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  const theme = getTheme();
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: Colors[theme].neutral[100] },
      ]}
    >
      <View style={styles.label}>
        <Text
          style={[NormalText.Regular, { color: Colors[theme].neutral[400] }]}
        >
          Busca tus temas favoritos...
        </Text>
        <FontAwesome
          name="search"
          color={Colors[theme].neutral[400]}
          size={20}
        />
      </View>
    </Pressable>
  );
};

export default SearchBar;
