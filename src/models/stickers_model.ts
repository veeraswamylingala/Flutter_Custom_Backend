import mongoose,{Document,Schema} from "mongoose";


interface MongoDBInterface extends Document{
    image_file: string;
    emojis: [string];
}

const MongoDBSchema: Schema = new Schema({
    image_file: { type: String, required: true },
    emojis: { type: [String], required: true },
  });

  const Stickers = mongoose.model<MongoDBInterface>("Stickers",MongoDBSchema);

  export { Stickers } ;

  
    //           "image_file": "https://raw.githubusercontent.com/hariiprasad/my-personal/master/1.webp",
    //           "emojis": ["?","??"]
    