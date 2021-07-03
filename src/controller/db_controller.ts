import {Request,Response} from "express";
import jwt from "jsonwebtoken"; 
import dotenv from "dotenv";
import { error } from "console";

dotenv.config();
export class DBController{

static async showAdminData(req: Request, res: Response) {
    let secretKey = process.env.JWT_KEY as string;
    let token = req.headers.authorization as string;

    if (token === "secretDataOfAdmin") {
        return res.send({
        data: "Some confidential data",
        received: true,
        });
    } else {
        return res.send({
        data: null,
        received: false,
        });
    }
}



static async showdata(req: Request,res: Response){
    let secretKey =  process.env.JWI_KEY as string;
    let token = req.headers.authorization as string ;

    jwt.verify(token,secretKey,(error:any,data:any)=>{
        if(error){
            return res.send({
                data: error,
                received: false,
              });
        }else{
            return res.send({
                data: data,
                received: true,
              });
        }
    })
}



static async signup(req: Request,res: Response){

let secretKey =  process.env.JWI_KEY as string;
    
 let { username ,useremail } = req.body;

    console.log(username,useremail);
    jwt.sign(
        // Creating JWT's
        {
          useremail: useremail, // Payload = User credentials
        },
        secretKey, // Secret key
        {
          expiresIn: "2h", // Expiry
        },
        (error: any, jwtData: any) => {
          if (error) {
            return res.send({
              data: error,
              created: false,
            });
          }else{
            console.log(jwtData);
            return res.send({
                data: jwtData,
                created: true,
              });

          }
        }
      );
    }


static async getTagData(req:Request,res:Response){
  let { tagname } = req.body;
  // console.log(tagname);
  const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);

  return res.send({
    tagName:tagname,
    tagValue:  parseInt(rand.toString(),10),
    received:true
  });
}



  }