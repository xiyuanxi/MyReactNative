import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './Home';
import List from './List';
import Inputs from './Input'
import ScrollViewExample from './ScrollView'
import HttpExample from './http_example.js'

export default class App extends React.Component {
  state = {
    myState : "hello world, React Native."
  } 

  updateState = () => this.setState({ myState: 'The state is updated' })

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={{ }}>
        <Text onPress = {this.updateState} style={{marginTop:50}}>
          {this.state.myState} 
        </Text>
       <Image source={pic} style={{width: 193, height: 110}}/> 
       <Home myState = {this.state.myState} updateState = {this.updateState}/>
       <List/>
       <Inputs />
       {/* <ScrollViewExample /> */}
       <HttpExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
