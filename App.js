import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Home from './components/Home'
import WebPage from './components/WebPage'

export default class App extends React.Component {
  constructor(state){
    super(state)
    this.state = {
      activeTab : 'home',
    }

    this.hendelerState = this.hendelerState.bind(this)
  }

  hendelerState(){
    console.log('hendelerState=>Webpage')
    this.setState({
      activeTab : 'web'
    })
  }
  
  render(){
    return (
      <View style={styles.body}>
        <ScrollView>
          { ( this.state.activeTab === 'home' ? <Home action={this.hendelerState} /> : null)}
          { ( this.state.activeTab === 'web' ? <WebPage /> : null)}
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: 'rgb(34,34,34)',
  }
});