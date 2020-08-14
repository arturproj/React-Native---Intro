import React from 'react';
import { StyleSheet, Button, View } from 'react-native'
import { WebView } from 'react-native-webview';


export default class WebPage extends React.Component {
    render(){
      return(
        <>
            <View style={{flex: 1}}>
                <View style={{marginTop:20, height:40,backgroundColor:'#000'}}>
                <Button title={"Clouse"}  onPress={() => this.props.action('home')}/>
                </View>
                <WebView  style={{flex: 1}}
                    source={{ uri: 'https://github.com/react-native-community/react-native-webview', }} 
                />
            </View>

        </>
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
});