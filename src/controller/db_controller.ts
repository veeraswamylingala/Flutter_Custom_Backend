import {Request,Response} from "express";
import jwt from "jsonwebtoken"; 
import dotenv from "dotenv";
import { error } from "console";
import multer from "multer";
import nodemon  from "nodemon"

dotenv.config();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

var upload = multer({ storage: storage }).single('file')

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
     
      // console.log(tagname);
      const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
    
      return res.send({
        tagName:"GETTAGDATA",
        tagValue:  parseInt(rand.toString(),10),
        received:true
      });
    }



static async postTagData(req:Request,res:Response){
  let { InputScript } = req.body;
     console.log(InputScript);
  const min = 0;
    const max = 100;
    const rand = min + Math.random() * (max - min);

  return res.send({
    tagName:InputScript,
    data:  parseInt(rand.toString(),10),
    error:"false"
  });
}

///Get File from client and store in file location 
static async uploadFile(req:Request,res:Response){

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
return res.status(200).send(req.file)

})


}



  }