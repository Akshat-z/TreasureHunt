import express from 'express'
import userrout from './routes/user.js'
import path from 'path'
import cookieParser from 'cookie-parser';
import {config} from 'dotenv'


config({
  path:'./data/config.env',
 })
 
export const app=express();


//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(path.resolve(),"public")));
app.use(cookieParser());
app.use("/",userrout);

app.get('/',(req,res)=>{
 res.set({
  "Access-control-Allow-Origin":"*"
});
return res.render("index.ejs");
})
