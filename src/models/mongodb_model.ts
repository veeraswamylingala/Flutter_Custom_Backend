import mongoose,{Document,Schema} from "mongoose";


interface MongoDBInterface extends Document{
    username: string;
    useremail: string;
}

const MongoDBSchema: Schema = new Schema({
    username: { type: String, required: true },
    useremail: { type: String, required: true },
  });

  const User = mongoose.model<MongoDBInterface>("User",MongoDBSchema);

  export { User } ;
