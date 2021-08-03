import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "./routes/routes";
import cors from "cors";
import Multer from "multer";
import nodemon  from "nodemon";


dotenv.config();
const app = express();
var multer = require('multer');
app.use(express.json());
app.use(express.urlencoded({extended:false})); 

const mongodb_url = process.env.MONGODB_URL as string;
const port =  process.env.PORT;
 app.set("port",port);


app.use(cors()) // Use this after the variable declaration

 mongoose.connect(
     
    mongodb_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    },() => {
        console.log("Database is connected");
    }

 );

//InDirectWay of Writing---y
app.use("/",router);

// //Direct way of Writing--
// app.use("/Direct",(req,res)=>{
//     res.send({
//         received:false,
//         data:"this is Direct page",
//     });

// });

app.listen(app.get("port"),() => {
    console.log('Server is Runnning  over port'+app.get("port"));
});
