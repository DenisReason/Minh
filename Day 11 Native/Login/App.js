 
import axios from 'axios';
import React,{useState }from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';


const reqLogintoServer = async(data,settoken)=>{
  axios.post('https://day10-daa5ba58a880.herokuapp.com/Login', data)
  .then(Response=>{
    settoken(Response.data)
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
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderColor:"black",
    borderWidth:1,
    margin:5 ,
    width: 300,
    padding:5
  }
})
