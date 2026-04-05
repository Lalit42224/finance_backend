const express =  require("express")
const router = express.Router()
const {userRegisterController,userLoginContoller} =  require("../controllers/auth.controllers")
const auth  =  require("../middleware/authMiddleware");
const role =  require("../middleware/roleMiddleware");

//Public routes
router.post("/register",userRegisterController);
router.post("/login",userLoginContoller);


// Protected route(only admin)
router.get("/admin-data",auth,role("admin"),(req,res)=>{
         res.json({msg:"Welcome admin"});
})

// Analyst + admin
router.get("/analytics",auth,role("analyst","admin"),(req,res)=>{
         res.json({msg:"Analytics data"})
})


module.exports =  router;