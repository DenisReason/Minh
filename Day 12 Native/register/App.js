import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';



const Register = async(data,setstatus) => {
  axios.post('https://day10-daa5ba58a880.herokuapp.com/Register', data).then(response => {
    console.log(response.data)
    setstatus("done")
  }).catch(error=>{
    if(error.message =="Request failed with status code 409"){
      setstatus("409")
    }
    console.log(error)
  })
};

export default function App() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [status, setstatus] = useState('')
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Username' onChangeText={setusername}></TextInput>
      <TextInput style={styles.input} placeholder='Password' onChangeText={setpassword}></TextInput>
      <Button onPress={() => { Register({ username: username, password: password },setstatus)}} title='Register'></Button>
      {status=="done"&& (<Text>CREATE SUCCESSFUL!</Text>)}
      {status=="409"&& (<Text>THIS ACCOUNT HAS ALREADY EXISTED</Text>)}
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    padding: 5,
    margin: 5,

  }
});
