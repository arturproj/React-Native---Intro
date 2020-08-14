import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Button, Alert } from 'react-native';

function getAlert(){
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

export default class Home extends React.Component{
  render(){
    return(
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={[styles.text,styles.text1]}>Open up App.js to start working on your app!</Text>
            <Text style={[styles.text,styles.text2]}>Open up App.js to start working on your app!</Text>
            <Text style={[styles.text,styles.text3]}>Open up App.js to start working on your app!</Text>
          </View>
          <View style={styles.container_center}>
            <Image
              source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
              style={styles.images_logos} 
            />
            <Button title={"Alert"} onPress={getAlert} />
            <Button title={"Konexio"} onPress={() => this.props.action('web')}/>
          </View>
          <View>
            <Text style={[styles.text,styles.text3]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    body:{
      backgroundColor: 'rgb(34,34,34)',
    },
    container: {    
      
    },
    container_center: {    
      alignItems: 'center',
    },
    text: {
      marginVertical: 80,
      color : 'rgb(255,255,255)' 
    },
    text1: {
      fontSize: 30
    },
    text2: {
      textAlign: 'center'
    },
    text3: {
      fontWeight: 'bold'
    },
    images_logos :{
      width : 270,
      height : 90,
      
    }
});