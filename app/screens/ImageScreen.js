import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default function notification({ route, navigation }) {
  const { photo } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={{ uri: photo.uri }} style={{ width: 380, height: 550 }} />
    </View>
  );
}
