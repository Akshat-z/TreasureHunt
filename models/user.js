import mongoose from 'mongoose';

//* creating Scheme
const userScheme = new mongoose.Schema({
 name:{
    type:String,
    require:[true,"Please fill the name"],
 },
 email:{
    type:String,
    unique:[true],
    require:[true,"Please fill the email"],
 },
 password:{
    type:String,
    require:[true,"Please fill the password"],
 },
 puzzle1:{
   type:String,
   default:"0",
  },
  puzzle2:{
   type:Number,
   default:"0",
 },
 puzzle3:{
  type:Number,
  default:"0",
 },
 puzzle4:{
  type:Number,
  default:"0",
 },
 puzzle5:{
  type:Number,
  default:"0",
 }
})

//* model
export const user=mongoose.model("user",userScheme);