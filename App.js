import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

import { StatusBar } from "expo-status-bar";
import { Camera } from "expo-camera";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
  Dimensions,
} from "react-native";

// HOME SCREEN FUNCTION

function HomeScreen({ navigation }) {
  console.log("App started!");
  const alertOnClick = () => alert("Must i learn, React Native!!");
  // const onPress = () => alert("selam");
  const onPress = () => navigation.navigate("Camera");

  // IMAGE PICK FROM GALLERY
  const [image, setImage] = useState(null); // image picking

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Galerine erişmek için izine ihtiyacım var!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(photo);

    if (!photo.cancelled) {
      setImage(photo.uri);
    }

    navigation.navigate("Image", { photo: photo });
  };
  // IMAGE PICK FROM GALLERY

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

      <TouchableOpacity onPress={pickImage} style={styles.picturesButton}>
        <Text style={styles.textInsideButtons}>To pick image, click me!</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// HOME SCREEN FUNCTION

// CAMERA SCREEN FUNCTION

function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
        autoFocus="on"
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-start",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                left: 70,
                top: 20,
              }}
            >
              Flip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={async () => {
              if (cameraRef) {
                let photo = await cameraRef.takePictureAsync("photo");
                console.log("photo", photo);
                navigation.navigate("Image", { photo: photo });
              }
            }}
          >
            <View
              style={{
                borderWidth: 2,
                borderRadius: "50%",
                borderColor: "white",
                height: 80,
                width: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bottom: 80,
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: "50%",
                  borderColor: "white",
                  height: 70,
                  width: 70,
                  backgroundColor: "white",
                }}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

// CAMERA SCREEN FUNCTION

// AFTER CAMERA TAKING PICTURE TO ANOTHER PAGE

function ImageScreen({ route, navigation }) {
  const { photo } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={{ uri: photo.uri }} style={{ width: 380, height: 550 }} />
    </View>
  );
}

// CAMERA SCREEN FUNCTION

// MAIN FUNCTION STARTS HERE

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // for opening screen
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  exampleBox: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  textInsideButtons: {
    fontSize: 20,
    position: "absolute",
    top: 19,
  },
  cameraButton: {
    width: "70%",
    height: 70,
    backgroundColor: "tomato",
    position: "absolute",
    top: 550,
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "black",
  },
  picturesButton: {
    width: "70%",
    height: 70,
    backgroundColor: "#66ff66",
    position: "absolute",
    top: 640,
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "black",
  },

  // for opening screen

  // for camera

  // for camera
});

export default App;

// MAIN FUNCTION ENDS HERE
