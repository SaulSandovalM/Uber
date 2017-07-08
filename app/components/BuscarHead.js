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
import * as Animatable from 'react-native-animatable';

const AnimatableTouchable = Animatable.createAnimatableComponent(TouchableWithoutFeedback);
class BotonHead extends Component{
  render(){
    return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.botIni} ><Text style={{fontSize:25}}>¡Donde mijo?</Text></TouchableOpacity>
    </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
  },
  botIni:{
    position:'absolute',
    justifyContent:'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 4},
    backgroundColor: 'white',
    shadowColor: 'black',
    marginTop: -190,
    padding: 15,
    margin: 50,
    width: 250,
  }
});
export default BotonHead;
