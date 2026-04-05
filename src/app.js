const express = require("express")
const cookieParser = require("cookie-parser");
const recordRoutes  =require("./routes/recods.routes")
const userRoutes =  require("./routes/user.routes");
const summaryRoutes = require("./routes/summary.routes");
const app = express();
app.use(cookieParser());
app.use(express.json())
app.use("/api/users",userRoutes)
app.use("/api/records",recordRoutes)
app.use("/api/dashboard", summaryRoutes);;



module.exports = app;