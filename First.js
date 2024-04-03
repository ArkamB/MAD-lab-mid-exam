import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from './assets/book.jpeg';

export default function First(props) {

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={{ fontSize: 50, color: 'white' }}>Welcome to the Book Reading App</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate("Books Info")}}>
          <Text style={{ color: 'white' }}>Let's Get Started</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Adds a semi-transparent black overlay on the background image
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 20,
    marginTop: 40,
    borderRadius: 20,
  },
});
