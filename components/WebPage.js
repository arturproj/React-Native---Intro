import React from 'react';
import { View } from 'react-native'
import { WebView } from 'react-native-webview';


export default class WebPage extends React.Component {
    render(){
      return(
            <View style={{ flex: 1 }}>
                <WebView  style={{ flex: 1 }}
                    source={{ uri: 'https://github.com/react-native-community/react-native-webview', }} 
                />
            </View>
        );
    }
}