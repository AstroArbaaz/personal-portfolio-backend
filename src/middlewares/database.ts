import mongoose from 'mongoose';
import dotenv from "dotenv";
import Logger from '../utils/logger';

dotenv.config();

const local_db:any = process.env.LOCAL_DB; // use this database connection for local testing / developement.
const cloud_db:any = process.env.CLOUD_DB; // use this database connection for cloud testig  / development / production.

const options:any = { useNewUrlParser: true, useUnifiedTopology: true };

const databaseConnection = async () => {
    try{
        await mongoose.connect(cloud_db, options);
        Logger.info('database is connected...');
    }catch(error){
        Logger.error("error connecting to database...", error);
    }
};

// export { databaseConnection };
export default databaseConnection;