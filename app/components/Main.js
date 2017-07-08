import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Image, TouchableOpacity,Text, } from 'react-native';
import MapView from 'react-native-maps';

import NavigationIcon from './NavegationIcon';
import Boton from './BuscarHead';




class Main extends Component {

  render() {
    const {onPress, icon} = this.props
    return (
      <View style={styles.container}>
        <NavigationIcon
        />
        <Boton/>
        <MapView style={styles.map} initialRegion={{
          latitude: 20.697004,
          longitude: -103.374814,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
          <MapView.Marker coordinate={{
            latitude: 20.697004,
            longitude: -103.374814
          }}>
            <View style={styles.radius}>
              <View style={styles.marker}/>
            </View>
          </MapView.Marker>
        </MapView>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end'
        }}>
          <TouchableOpacity
            style={styles.contain}
            onPress={onPress}
            activeOpacity={0.5}>
            <Image style={styles.image} source={require('../img/icon-home.png')}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contain}
            onPress={onPress}
            activeOpacity={0.5}>
            <Image style={styles.image} source={require('../img/icon-recent.png')}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contain}
            onPress={onPress}
            activeOpacity={0.5}>
            <Image style={styles.image} source={require('../img/icon-recent.png')}/>
          </TouchableOpacity>
        </View>

          <View style={{
                flexDirection: 'row'}}>
              <Text style={{padding: 15}}>Home</Text>
              <Text style={{padding: 15}}>Zynga</Text>
              <Text style={{padding: 15}}>Facebook</Text>
          </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
  image: {
    width: 40,
    height: 40
  },
  contain: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.12
  }
/*justifyContent: 'center',
alignItems: 'center',*/
});

export default Main;
