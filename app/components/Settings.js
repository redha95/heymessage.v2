import React from 'react';
import { StyleSheet, Text, View,Image, TextInput, ScrollView, TouchableOpacity,  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Switch } from 'react-native-switch';




export default class Settings extends React.Component {


render() {


  return (

        <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}> Paramètres</Text>
        
          <TouchableOpacity onPress= { () => this.props.navigation.navigate('Main')} style={styles.settingsButton}>
           <Image source={require('../../image/left-arrow-key.png')}  />

          </TouchableOpacity>
        </View>
        <TextInput>

          La jsuis pas bien

        </TextInput>
        </View>
  );
 }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 5,
        borderBottomColor: '#f2f2f2'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontStyle: 'italic',
        paddingTop: 30,
        fontWeight:'bold',
        paddingBottom: 13,
    },

    miniText: {
      fontSize: 10,
        fontStyle: 'italic',
    },
    settingsButton: {
      position: 'absolute',
      left:10,
      top:35,
      
    },

});

