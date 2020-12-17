import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  SafeAreaView,
  Button,
  SliderComponent,
  Platform,
} from "react-native";

function OpeningScreen(props) {
  console.log("App started!");
  const alertOnClick = () => alert("Must i learn, React Native!!");
  const onPress = () => alert("Selam");

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.exampleBox}>
        <Text>This app is going to be an object detection app!</Text>
        <Text>As you can guess i'm just trying to learn now...</Text>
        <Text>So here is a picture of Baby Yoda.</Text>
        <Image
          source={{
            width: 200,
            height: 300,
            uri:
              "https://media.wired.com/photos/5dd593a829b9c40008b179b3/master/w_2560%2Cc_limit/Cul-BabyYoda_mandalorian-thechild-1_af408bfd.jpg",
          }}
        />

        <Button color="black" title="open me!" onPress={alertOnClick} />
      </View>

      <TouchableOpacity onPress={onPress} style={styles.cameraButton}>
        <Text style={styles.textInsideButtons}>To use camera, click me!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress} style={styles.picturesButton}>
        <Text style={styles.textInsideButtons}>To pick image, click me!</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Made with love. Author : Erdem Özer
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
  },
  exampleBox: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  textInsideButtons: {
    fontSize: 20,
    position: "absolute",
    top: 21,
  },
  cameraButton: {
    width: "70%",
    height: 70,
    backgroundColor: "tomato",
    position: "absolute",
    top: 600,
    alignItems: "center",
    borderRadius: 20,
  },
  picturesButton: {
    width: "70%",
    height: 70,
    backgroundColor: "#66ff66",
    position: "absolute",
    top: 690,
    alignItems: "center",
    borderRadius: 20,
  },
  footer: {
    width: "100%",
    height: 60,
    position: "absolute",
    bottom: 0,
    backgroundColor: "gold",
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 20 : 0,
  },
  footerText: {
    fontSize: 20,
    position: "absolute",
    top: 15,
  },
});

export default OpeningScreen;
