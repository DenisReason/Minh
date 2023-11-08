import fs from 'fs'
//Ham ghi file
console.log("Minh Tri")
fs.writeFile("text.txt","Hello world",(err)=>{
    if(err){
        console.log(err)
    }
})
// Ham doc file
fs.readFile("text.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})
export const multi = (a,b)=>{
    return (a*b)
}
export const sum = (a,b)=>{
    return (a+b)
}
