const app =  require("./src/app")
const connectDB  = require("./src/config/db");


require("dotenv").config();

connectDB();

const PORT = process.env.PORT || 5000;


app.listen(3000,()=>{
         console.log(`server is running on port ${PORT}`);
});