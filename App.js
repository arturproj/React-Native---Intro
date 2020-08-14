import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Home from './components/Home'
import WebPage from './components/WebPage'

export default class App extends React.Component {
  constructor(state){
    super(state)
    this.state = {
      activeTab : 'web',
    }

    this.hendelerState = this.hendelerState.bind(this)
  }

  hendelerState(val){
    console.log('hendelerState=>',val)
    this.setState({
      activeTab : val
    })
  }
  
  render(){
    return (
      <>
        { ( this.state.activeTab === 'home' ? <Home action={this.hendelerState} /> : null ) }
        { ( this.state.activeTab === 'web' ? <WebPage action={this.hendelerState} /> : null ) }
        <StatusBar style="auto" />
      </>

    );
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: 'rgb(34,34,34)',
  }
});