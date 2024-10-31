import mongoose  from "mongoose";

const connectDB = async ()=> {
    try {
         const conn = await mongoose.connect(process.env.MONGO_URI)
         console.log("Database connected Successfully", conn.connection.host)

    } catch (error) {
        console.log("Error Connecting to Database", error.message)
        process.exit(1)
    }
   
}


export default connectDB