  
import { Request, Response } from "express";
import { User } from "../models/mongodb_model";


export class MongoDBController {
    //CRUD

//CREATE OPERATION
static async createData(req: Request, res: Response) {
    let { username, useremail } = req.body;

    let user = new User({
      username: username,
      useremail: useremail,
    });

    user.save()
      .then((data: any) => {
        return res.send({
          data: data,
          submitted: true,
        });
      })
      .catch((error: any) => {
        return res.send({
          data: error,
          submitted: false,
        });
      });
  }


  //READ OPERATION
  static async readData(req:Request,res:Response){
    await User.find().then((data:any)=>{
        return res.send({
            data: data,
            received: true,
          });
    }).catch((error:any)=>{
        return res.send({
            data: error,
            received: false,
          });
    })
  }




//UPDATE OPERATION
static async updateData(req: Request, res: Response) {
  let { userid, username, useremail } = req.body;
  await User.findOneAndUpdate(
    {
      //Filter
      _id: userid,
    },
    {
      //Update fields
      username: username,
      useremail: useremail,
    },
    {
      useFindAndModify: true,
    }
  )
    .then((data: any) => {
      return res.send({
        updated: true,
      });
    })
    .catch((error: any) => {
      return res.send({
        updated: false,
      });
    });
}

  //DELETE DATA
  static async deleteData(req: Request, res: Response) {
    let { useruid } = req.params;

    await User.findOneAndDelete({
      //FILTER
      _id: useruid,
    })
      .then((data: any) => {
        return res.send({
          deleted: true,
        });
      })
      .catch((error: any) => {
        console.log(error);
        return res.send({
          deleted: false,
        });
      });
  }


   //EXISTS
   static async checkIfExists(req: Request, res: Response) {
    let { username } = req.body;

    console.log(username)
    await User.exists({
      //FILTER
      username: username,
    })
      .then((data: any) => {
        console.log(data);
        return res.send({
          exists: data,
        });
      })
      .catch((error: any) => {
        console.log(error);
        return res.send({
          exists: false,
        });
      });
  }




  //Heroku
   //READ OPERATION
   static async getStickers(req:Request,res:Response){
    await User.find().then((data:any)=>{
        return res.send({
            data: data,
            received: true,
          });
    }).catch((error:any)=>{
        return res.send({
            data: error,
            received: false,
          });
    })
  }








}