const mongoose = require('mongoose');
require ('dotenv').config();



const connectDB= async () =>{
    mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true,
         useUnifiedTopology: true
        });
        
        mongoose.connection.on('connected', ()=>{
            console.log('mongoose is connected ! ')
        })
}



module.exports = connectDB