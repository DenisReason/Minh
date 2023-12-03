import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'




const url = "https://day10-daa5ba58a880.herokuapp.com/login"
const url2 = "http://localhost:3000/login"


export const setJwt = async (jwttoken)=>{
    await AsyncStorage.setItem('jwt',jwttoken)
}
const handleLogin = async (data, setToken,navigation) => {
    console.log("HandleLogin!!");
    console.log(data)
    await axios.post(url, data)
        .then(Response => {
            console.log("RESSpone");
            if(Response.data == 'Incorrect account name or password'){
                console.log("403");
                setstatus("403")
                return
            }
            else{
                console.log("here!!");
                setJwt(Response.data)
                setToken(Response.data)
                if (navigation && navigation.navigate) {
                    navigation.navigate('Home');
                  } else {
                    console.error('Navigation object or navigate method is undefined.');
                  }
                return
            }
        })
        .catch(error => {
            if(error.message.data =="Account does not exist"){
                setstatus("401")
                console.log("401");
            }
            else{
                console.log(error);
            }
            return
        })
}

export default handleLogin