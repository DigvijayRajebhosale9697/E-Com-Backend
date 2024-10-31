import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.DATABASE_URL;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("DATABASE CONNECTED");

        const connection = mongoose.connection;
        const database = connection.db;
        const collectionName = 'Products_Data';

        const fetchedData = await database.collection(collectionName).find({}).toArray();
        console.log("Data fetched:", fetchedData);

        global.Products_Data = fetchedData;

        console.log(fetchedData,"Products_Data")

    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
}

export default connectToDatabase;
