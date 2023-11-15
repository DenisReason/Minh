<<<<<<< HEAD
import axios from 'axios';
import React,{useState }from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';


const reqLogintoServer = async(data,settoken)=>{
  axios.post('https://day10-daa5ba58a880.herokuapp.com/login', data)
  .then(Response=>{
    settoken(Response.data)
    console.log(Response.data)
  })
  .catch(error=>{
    if(error.response.data == 'Account does not exist'){
      settoken(error.response.data)
    }
    if(error.response.data=='Incorrect account name or password'){
      settoken(error.response.data)
    }
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  })
}

export default function App() {
  const [usersname, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, settoken] = useState('')
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='User name' onChangeText={setUsername} value={usersname}></TextInput>
      <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} value={password}></TextInput>
      <Button onPress={()=>{reqLogintoServer({username:usersname,password:password},settoken)}} title='Login'></Button>
      {token && (<Text>{(JSON.stringify(token).replaceAll('"',""))}</Text>)}
=======
import { StatusBar } from 'expo-status-bar';
import react, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default function App() {
  const [count, setcount] = useState(0)
  return (
    <View style={styles.container}>
      <Button onPress={()=>{
        setcount(count+1)
      }} title='Increase'></Button>
      <Text>{count}</Text>
>>>>>>> 019ba310eb9cfd315441e97df0288cba4e701fc1
    </View>
  );
}

<<<<<<< HEAD

=======
>>>>>>> 019ba310eb9cfd315441e97df0288cba4e701fc1
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
<<<<<<< HEAD
  input:{
    borderColor:"black",
    borderWidth:1,
    margin:5 ,
    width: 300,
    padding:5
  }
=======
>>>>>>> 019ba310eb9cfd315441e97df0288cba4e701fc1
});
