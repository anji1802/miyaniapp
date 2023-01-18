import React from 'react';
import { StatusBar, TextInput } from 'react-native';
import { Button, StyleSheet, Text, View } from 'react-native';
export default function  App() {
  function done(){
    alert('completed me');
  }
  {/*} const saygoodbye= () =>
  {
    alert('goodbye')
  } */}
  return(
    <View style={styles.container}> 
    <TextInput style={{fontSize:20}}>enter your name</TextInput>
    <TextInput style={{fontSize:20}}>Password</TextInput>
     
    
    <Button title="Login" onPress={done} />
    {/* <Button title="goodbye" onPress={saygoodbye} />*/}

    

    </View>
  )
 
} 
      const styles = StyleSheet.create({
      container: {
         flex: 1,
         backgroundColor: 'violet',
         alignItems: 'center',
         justifyContent: 'center',
         padding: 20,
         margin:20
         
   },


   
   
});