import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class NavigationIcon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => props.toggle()}
        style={styles.container}
      >
        <Image
          style={styles.icon}
           source={require('../img/icon-hamburger.png')}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    top: 36,
    left: 22
  },
  icon: {
    width: 21,
    height: 21,
  },
})
