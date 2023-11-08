import { MongoClient } from "mongodb";

const url = "mongodb+srv://denisadmin:00000000tri@cluster0.nmebfc9.mongodb.net/"

const Client = new MongoClient(url)
const dbName = "MinhDb"
async function connectToDB(){
    try { 
        await Client.connect();
        console.log("Connected successfully to server")
        const db = Client.db(dbName);
        const collection = db.collection('Col1')
        collection.insertOne({name:"minh",age:19})
        return 'done'
    }
    catch(err){
        console.log(err)
    }
}
connectToDB()
