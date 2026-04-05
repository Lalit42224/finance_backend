const express =  require("express")
const router = express.Router()
const {userRegisterController,userLoginContoller} =  require("../controllers/auth.controllers")
const auth  =  require("../middleware/authMiddleware");
const role =  require("../middleware/roleMiddleware");


const {
         createRecord,
         getRecords,
         updateRecord,
         deleteRecord,
         bulkCreate,
} = require("../controllers/recordController");



// Admin only
router.post("/",auth,role("admin"),createRecord);
router.post("/bulk", auth, role("admin"), bulkCreate);


// Analyst + Admin
router.get("/",auth,role("analyst","admin"),getRecords);


//Admin only
router.put("/:id",auth,role("admin"),updateRecord)
router.delete("/:id",auth,role("admin"),deleteRecord);


module.exports =  router;