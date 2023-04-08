const express=require("express");
const router = express.Router();

const landing = require("../controller/landing");

router.get("/",landing.home);
// for another controller to add with
router.use("/users",require("./users"));

module.exports=router;