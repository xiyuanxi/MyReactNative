import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import {Home} from 'Home';

export default class App extends React.Component {
  state = {
    myState : "hello world."
  }

  updateState = () => this.setState({ myState: 'The state is updated' })

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text onPress = {this.updateState}>
          {this.state.myState} 
        </Text>
       <Image source={pic} style={{width: 193, height: 110}}/>
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
