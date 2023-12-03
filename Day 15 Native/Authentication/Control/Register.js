import axios from "axios";



const url = "https://day10-daa5ba58a880.herokuapp.com/register"
const handleRegister = async(data,navigation, Setstate)=>{
    await axios.post(url, data)
    .then(Response=>{
        console.log("getdata!!!");
        console.log(Response.data);
        Setstate("Create Account Successful!!")
        setTimeout(() => {
            navigation.navigate("Login")
        }, 3000);
        
    }).catch(err=>{
        if(err.response.status == 409){
            Setstate("This account has already existed")
        }
    })
}
export default handleRegister