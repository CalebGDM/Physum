import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Title } from "../../constants/Texts";
import Colors from "../../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { Exersice, Resource } from "../../models";
import { Analytics } from "aws-amplify";

interface ResourceItemProps {
  resource: Resource | Exersice;
  index: number;
  onComplete?: (resource: Resource | Exersice) => void;
  isCompleted?: boolean;
}

const ResourceItem = ({ resource, index, onComplete = () => {}, isCompleted = false }: ResourceItemProps) => {
  const onResourcePressed = () => {
    WebBrowser.openBrowserAsync(resource.url);
    onComplete(resource)
    Analytics.record({
      name: resource instanceof Exersice ? "exerciseOpened" :  "resourceOpened",
      attributes: {resourceId: resource.id}
    })
  };
  return (
    <View style={[styles.container, { marginBottom: 20 }]}>
      <View style={styles.container}>
        {isCompleted ? (
          <FontAwesome
            style={{ marginRight: 15 }}
            name="check"
            size={20}
            color={Colors.light.primary[500]}
          />
        ) : (
          <>
            <Text style={[Title.Section, { marginRight: 15 }]}>
              {index + 1}
            </Text>
          </>
        )}

        <Text style={[Title.Section, { width: "80%" }]}>
          {resource.title}
        </Text>
      </View>

      {resource.url && (
        <TouchableOpacity onPress={onResourcePressed}>
          <FontAwesome name="share-square-o" size={30} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completed: {
    color: Colors.light.primary[500],
  },
});

export default ResourceItem;
