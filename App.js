import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback , Alert, SafeAreaView, Button, SliderComponent } from 'react-native';
import OpeningScreen from './app/screens/OpeningScreen';

export default function App() {

  return <OpeningScreen />;
}



/*
let i = 1;
console.log("App started!");

const handleTextPress = () => console.log("Text clicked");
const handleButton = () => console.log("Button clicked");
const alertOnClick = () => alert('Must i learn, React Native!!');

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handleTextPress}>This app is going to be an object detection app!</Text>
      <Text onPress={handleTextPress}>As you can guess i'm just trying to learn now...</Text>
      <Text onPress={handleTextPress}>So here is a picture of Baby Yoda.</Text>

      <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://media.wired.com/photos/5dd593a829b9c40008b179b3/master/w_2560%2Cc_limit/Cul-BabyYoda_mandalorian-thechild-1_af408bfd.jpg",
        }}
      />

      <Button
        color="black"
        title="open me!"
        onPress={alertOnClick}
      />

      <View style={styles.footer}>
      <Text>App created by me. Erdem Ozer.</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );


  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/