  
import { Request, Response } from "express";
import { User } from "../models/mongodb_model";
import { Stickers } from "../models/stickers_model";


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


////////Stickers Table-------------------------------
//CREATE OPERATION
static async addStickers(req: Request, res: Response) {
    let {  stickerUrl,emojis } = req.body;

    let stickers = new Stickers({
      stickerUrl: stickerUrl,
      emojis:emojis
    });

    stickers.save()
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
  static async getStickers(req:Request,res:Response){
    await Stickers.find().then((data:any)=>{
        return res.send(JSON.stringify({
          identifier:"1",
          name :"Brahmi",
          publisher: "Sticker Mathra",
          tray_image_file: "https://firebasestorage.googleapis.com/v0/b/unical-employe.appspot.com/o/ProfilePhotos%2FtrayImage.png?alt=media&token=780d09c8-b9dc-42d0-b097-50763f7fb39e",
          image_data_version: "1",
          avoid_cache:false,
          publisher_email:" ",
          publisher_website: " ",
          privacy_policy_website: " ",
          license_agreement_website: " ",
          stickers: data,
          }));
    }).catch((error:any)=>{
        return res.send({
            data: error,
            received: false,
          });
    })
  }


//   "identifier": "1",
//       "name": "Cuppy",
//       "publisher": "Jane Doe",
//       "tray_image_file": "https://raw.githubusercontent.com/hariiprasad/my-personal/master/trayimage.png",
//       "publisher_email":"",
//       "publisher_website": "",
//       "privacy_policy_website": "",
//       "license_agreement_website": "",
//       "stickers": [
//         {
//           "image_file": "https://raw.githubusercontent.com/hariiprasad/my-personal/master/1.webp",
//           "emojis": ["?","??"]
//         },
//         {
//           "image_file": "https://raw.githubusercontent.com/hariiprasad/my-personal/master/2.webp",
//           "emojis": ["??","??"]
//         },
//         {
//           "image_file": "https://raw.githubusercontent.com/hariiprasad/my-personal/master/3.webp",
//           "emojis": ["??","??"]
//         },
//         {
//           "image_file": "https://raw.githubusercontent.com/hariiprasad/my-personal/master/1.webp",
//           "emojis": ["??","??"]
//         },
//         {
//           "image_file": "https://raw.githubusercontent.com/hariiprasad/my-personal/master/1.webp",
//           "emojis": ["?","??"]
//         },
//         {
//           "image_file": "https://raw.githubusercontent.com/hariiprasad/my-personal/master/2.webp",
//           "emojis": ["??","??"]
//         },
//         {
//           "image_file": "https://raw.githubusercontent.com/hariiprasad/my-personal/master/3.webp",
//           "emojis": ["??","??"]
//         },
//         {
//           "image_file": "https://raw.githubusercontent.com/hariiprasad/my-personal/master/1.webp",
//           "emojis": ["??","??"]
//         }
//       ]










 }