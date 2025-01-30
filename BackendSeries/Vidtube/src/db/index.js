import mongoose from "mongoose";
import {DB_Name} from "../constants.js";

const connectDB = async()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`) 
       console.log(`\N MongoDb connected ! DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection error",error)
        process.exit(1)
    }
}
export default connectDB