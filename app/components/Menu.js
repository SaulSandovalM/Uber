import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons';
import IonIcons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

class Menu extends Component {
  render(){
    return(
      <View style={styles.menu}>
        {/*}<View style={styles.avatarContainer}>
          <View style={styles.avatarImage}>
            <Image
              style={styles.avatar}
              source={require('../img/icon-home.png')}/>
            <Text style={styles.text}>
              Saul Sandoval M
            </Text>
          </View>
          <Icon
            name="exchange"
            color="white"
            size={25}/>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.textWithIcon}>
            <View style={styles.withIcon}>
              <Icon style={styles.iconWithText}
                name="download"
                color="white"
                size={28}/>
              <Text style={styles.text}>
                Mis Decargas
              </Text>
            </View>
            <Icon style={styles.rightIcon}
              name="angle-right"
              color="white"
              size={25}/>
          </View>
          <View style={styles.textWithIcon}>
            <View style={styles.withIcon}>
              <IonIcons
                style={styles.iconWithText}
                name="md-checkmark"
                color="white"
                size={28}/>
              <Text style={styles.text}>
                Mis Listas
              </Text>
            </View>
            <Icon style={styles.rightIcon}
              name="angle-right"
              color="white"
              size={25}/>
          </View>
        </ScrollView>*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default Menu;
