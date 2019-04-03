import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Home = (props) => {
    return (
        <View >
           <Text onPress = {props.updateState} style={styles.myState}>
              {props.myState}
           </Text>
        </View>
     )
}

export default Home;

const styles = StyleSheet.create ({
    myState: {
       marginTop: 20,
       textAlign: 'center',
       color: 'red',
       fontWeight: 'bold',
       fontSize: 20
    }
 })