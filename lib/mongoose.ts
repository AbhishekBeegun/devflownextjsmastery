import mongoose from 'mongoose';

let isConnected:boolean = false ;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL) return console.log('MISSO_ING MONGODB_URL');

    if(isConnected) {
       return console.log("MONGO CONNECTED");
    }

    try {
     await mongoose.connect(process.env.MONGODB_URL, {
        dbName: 'devflow'
     })

     isConnected = true;

     console.log('MongoDBdevflow connection successful');
    } catch (error) {
        console.log(error);
    }
}