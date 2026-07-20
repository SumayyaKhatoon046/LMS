const express=require("express");

const router=express.Router();

const protect=require("../middleware/authMiddleware");

const {evaluateCommunication}=require("../controllers/communicationController");

router.post("/",protect,evaluateCommunication);

module.exports=router;