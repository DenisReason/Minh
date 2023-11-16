import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { NavigationContainer, useNavigation,useRoute} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import axios from 'axios'
import { useState } from 'react';

const reqLogin = async(data, setstatus)=>{
  await axios.post("https://day10-daa5ba58a880.herokuapp.com/Login",data)
  .then(respone=>{
    setstatus(respone.data)
    console.log(respone.data)
  })
  .catch(error=>{
    if(error.message =="Request failed with status code 401"){
      setstatus("Account does not exist")
    }
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  })
}


const reqREgister = async(data, setstatus)=>{
  await axios.post("https://day10-daa5ba58a880.herokuapp.com/Register",data)
  .then(respone=>{
    setstatus(respone.data)
    console.log(respone.data)
  })
  .catch(error=>{
    if(error.message=="Request failed with status code 409"){
      setstatus("This account has already existed")
    }
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  })
}



const Login = () => {
  const [username, setusername] = useState('') 
  const [password, setpassword] = useState('') 
  const [status, setstatus] = useState('')
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TextInput placeholder='Username' style={styles.input} onChangeText={setusername}></TextInput>
      <TextInput placeholder='Password' style={styles.input} onChangeText={setpassword}></TextInput>
      <Button title="Login" onPress={()=>{reqLogin({username:username,password:password},setstatus)}}></Button>
      <Text onPress={()=>{navigation.navigate('Register')}} style={{color:"blue", margin:10}}>Register here</Text>
      {status && (<Text>{JSON.stringify(status.replaceAll('"',""))}</Text>)}
    </View>
  )
}
const Register = () => {
  const [username, setusername] = useState('') 
  const [password, setpassword] = useState('') 
  const [status, setstatus] = useState('')
  
  return (
    <View style={styles.container}>
      <TextInput placeholder='Username' style={styles.input} onChangeText={setusername}></TextInput>
      <TextInput placeholder='Password' style={styles.input} onChangeText={setpassword}></TextInput>
      <Button title="Register" onPress={()=>{reqREgister({username:username,password:password},setstatus)}}></Button>
      {status && (<Text>{JSON.stringify(status).replaceAll('"',"")}</Text>)}
    </View>
  )
}

const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Register" component={Register}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:300,
    height:20,
    borderColor:"black",
    borderWidth:1,
    padding:5,
    height:"auto",
    margin:5
  }
});
