import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

class BotonHead extends Component{
  render(){
    return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.botIni} ><Text style={{fontSize:25}}>A Donde Vas?</Text></TouchableOpacity>
    </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
  },
  botIni:{
    position: 'absolute',
    justifyContent:'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 4},
    backgroundColor: 'white',
    shadowColor: 'black',
    marginTop: -245,
    padding: 15,
    margin: 62,
    width: 250,
    height: 60
  }
});
export default BotonHead;
