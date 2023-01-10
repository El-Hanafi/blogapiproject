const mongoose = require('mongoose');


// function to connect
const dbConnect = async () =>{
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected successfully')
    } catch (error) { 
        console.log(error.message);
        process.exit(1)
    }
}

dbConnect();