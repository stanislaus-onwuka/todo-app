import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';

export default function App() {
  const createThreeButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
    );
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working</Text>
      <Pressable onPress={createThreeButtonAlert}>
        <Text>Hi</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6F28',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:"#fff",
  }
});
