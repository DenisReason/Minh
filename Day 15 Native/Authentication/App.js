import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import handleLogin, { setJwt } from './Control/Login';
import axios from 'axios';
import handleRegister from './Control/Register';

const url = "https://day10-daa5ba58a880.herokuapp.com/login"
const url2 = "http://localhost:3000/login"



const Register = ()=>{
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [state, Setstate] = useState('')


  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" onChangeText={setUsername} style={styles.input}></TextInput>
      <TextInput placeholder="Password" onChangeText={setPassword} style={styles.input}></TextInput>
      <Button onPress={async () => { await handleRegister({ username: username, password: password }, navigation, Setstate) ;console.log("Press!!");}} title="Register"></Button>
      {state&& (<Text>{state}</Text>)}
      <Text  style={styles.Linkcolor} onPress={()=>{navigation.navigate("Login")}} >Have Account? Login Here</Text>
    </View>
  )
}
const Login = () => {
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {
    const checkToken = async () => {
      const tokenjwt = await AsyncStorage.getItem("jwt")
      console.log(tokenjwt);
      if (tokenjwt!=null) {
        await axios.post(url, {token:tokenjwt})
          .then(Response => {
            console.log(Response);
            setJwt(Response.data)
            if(navigation){
              navigation.navigate("Home")
            }
            else{
              console.log("navigation is null");
            }
            
          })
          .catch(error => {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
          })
      }
    }
    checkToken()
  }, [])



  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" onChangeText={setUsername} style={styles.input}></TextInput>
      <TextInput placeholder="Password" onChangeText={setPassword} style={styles.input}></TextInput>
      <Button onPress={async () => { await handleLogin({ username: username, password: password }, setToken, navigation) ;console.log("Press!!");}} title="Login"></Button>
      <Text style={styles.Linkcolor} onPress={()=>{navigation.navigate(Register)}}>Register Here</Text>
    </View>
  )
}
const stack = createNativeStackNavigator()
const Userhome = () => {
  return (
    <View style={styles.container}>
      <Text>WELLCOME TO HOME PAGE</Text>
      <StatusBar style="auto" />
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Home" component={Userhome} />
        <stack.Screen name="Register" component={Register}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  Linkcolor:{
    color:"blue",

  }
  
});
