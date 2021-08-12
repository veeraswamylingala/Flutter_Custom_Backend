import mongoose,{Document,Schema} from "mongoose";


interface MongoDBInterface extends Document{
    stickerUrl: string;
    emojis: [string];
}

const MongoDBSchema: Schema = new Schema({
    stickerUrl: { type: String, required: true },
    emojis: { type: [String], required: true },
  });

  const Stickers = mongoose.model<MongoDBInterface>("Stickers",MongoDBSchema);

  export { Stickers } ;
