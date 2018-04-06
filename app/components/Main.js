import React from 'react';
import { StyleSheet, Text, View,Image, TextInput, ScrollView, TouchableOpacity, Button, } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Note from './Note';

export default class Main extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }
render() {

  let notes = this.state.noteArray.map((val, key) => {
    return <Note key={key} keyval= {key} val= {val}
      deleteMethod={ ()=> this.deleteNote(key) } />
  });

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}> HeyMessage</Text>
        <Text style={styles.miniText}> by Redha & Omar</Text>
        
          <TouchableOpacity onPress= { () => this.props.navigation.navigate('Settings')} style={styles.settingsButton}>
           <Image source={require('../../image/settings24.png')}  />

          </TouchableOpacity>
        </View>
    

    <ScrollView style={styles.scrollContainer}>

    {notes}
    </ScrollView>

    <View style={styles.footer}>

      <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholder='Ecrivez une note..'
            placeholderTextColor='gray'
            underlineColorAndroid='transparent'>
        
      </TextInput>

      </View>
        <TouchableOpacity onPress= { this.addNote.bind(this) } style={styles.addButton}>
           <Image source={require('../../image/right-arrow.png')} />

          </TouchableOpacity>
        


      </View>
      
  );
 }

 addNote() {

  if(this.state.noteText) {

    var d = new Date();
    this.state.noteArray.push({

      'date': d.getFullYear() + "/" + (d.getMonth()+ 1)+"/" + d.getDate(),
      'note' : this.state.noteText
    });
    this.setState({ noteArray: this.state.noteArray })
    this.setState({ noteText: ''});
  }

   
 }

 deleteNote(key) {
   this.state.noteArray.splice(key,1);
   this.setState({noteArray: this.state.noteArray })
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
        fontWeight:'bold'
    },

    miniText: {
      fontSize: 10,
        fontStyle: 'italic',
    },

    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: 'gray',
        padding: 15,
        margin:10,
        backgroundColor: 'transparent',
        fontStyle: 'italic',
        borderRadius:5,
        borderWidth:2,
        borderColor: 'gray',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 12,
        bottom: 17,
        backgroundColor: 'transparent',
        width: 50,
        height: 50,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    },
    settingsButton: {
      position: 'absolute',
      right:10,
      top:35,
      
    },
}); 

