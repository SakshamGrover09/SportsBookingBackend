// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://iit2021188:Saksham@123@cluster0.xxxxx.mongodb.net/sportsBooking?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('MongoDB connection error:', error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose=require('mongoose');
const mongoURI="mongodb+srv://groversaksham2001:saksham123@sports-booking.qt19a.mongodb.net/?retryWrites=true&w=majority&appName=Sports-Booking"
const User = require('../models/User');
const Booking = require('../models/Booking');
const Centre = require('../models/Centre');


const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{console.log("Connected pass")}).catch((e)=>console.log(e.message));
}

module.exports=connectToMongo;
