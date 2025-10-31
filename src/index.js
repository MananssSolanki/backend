import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import { app } from "./App.js";

dotenv.config({
    path: './.env'
})

connectDB()
.then((result)=>{
    app.listen(process.env.PORT || 8000 , () =>{
        console.log(` Server is running at port : ${process.env.PORT} `);
    })
    app.on("error" , (error) =>{
        console.log("ERRR : ", error);
        throw error
    })
})
.catch((error) =>{
    console.log("MONGo db connect failed!!!")
})






/*import express from 'express'

const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" , (error) => {
            console.log("ERROR: " , error)
            throw error
        })

        app.listen(process.env.PORT, () =>{
            console.log(`App is listing on port ${process.env.PORT} `);
        })
    }catch(error){
        console.error("ERROR : ",error)
        throw err
    }
})()
*/