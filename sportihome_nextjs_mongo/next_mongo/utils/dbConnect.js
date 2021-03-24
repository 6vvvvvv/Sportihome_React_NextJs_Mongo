import mongoose from "mongoose";

const connection = {};
const MONGO_URI = "mongodb+srv://lw:05875663@lau.bhqmr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const dbConnect = async () => {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;

    console.log("connection.isConnected", connection.isConnected);
    console.log("Connected to DB !!");
};

export default dbConnect;
