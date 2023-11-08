import express from 'express'
import { MongoClient } from 'mongodb'

const url = 'mongodb+srv://denisadmin:00000000tri@cluster0.nmebfc9.mongodb.net/'
const dbName = 'MinhDb'
const Client = new MongoClient(url)
async function ConnectToDb() {
    try {
        await Client.connect()
        const db = Client.db(dbName)
        const collection = db.collection("restaurants")
        const data = await GetRes3Re(collection)    
        console.log(data.length);
    } catch (error) {
        console.log(error);
    }finally{
        await Client.close()
    }
}

// TRUY VẤN TẤT CẢ CÁC CỬA HÀNG
async function Getall(collection){
    const data = await collection.find({}).toArray();
    return data
}

// TRUY VẤN CÁC CỬA HÀNG QUA ZIPCODE
async function GetResByZipcode(collection, zipcode){
    const data = await collection.find({"address.zipcode":zipcode}).toArray();
    return data 
}

//TRUY VẤN CÁC CỬA HÀNG QUA MÓN ĂN THEO QUỐC GIA
async function GetResByCuisineCoutry(collection, Coutry){
    const data = await collection.find({"cuisine":Coutry}).toArray()
    return data
}

// Truy vấn tất cả những nhà hàng có trên 3 đánh giá
async function GetRes3Re(collection){
    const data = await collection.find({$where: "this.grades.length>=3"}.length).toArray()
    return data
}
ConnectToDb()