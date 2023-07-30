import {app} from "./app.js"
import { connect } from "./data/database.js";

connect();

app.listen(process.env.PORT||4000,()=>{
 console.log("Server is working");
})