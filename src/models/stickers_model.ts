import mongoose,{Document,Schema} from "mongoose";


interface MongoDBInterface extends Document{
    stickerName: string;
    stickerUrl: string;
}

const MongoDBSchema: Schema = new Schema({
    stickerName: { type: String, required: true },
    stickerUrl: { type: String, required: true },
  });

  const Stickers = mongoose.model<MongoDBInterface>("Stickers",MongoDBSchema);

  export { Stickers } ;
