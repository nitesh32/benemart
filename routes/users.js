const express = require("express");
const route = express.Router();

const usercontroller=require("../controller/user_controller");

route.get('/profile',usercontroller.profile);
route.get('/signup',usercontroller.Sign_up);
route.get('/signin',usercontroller.Sign_in);
route.post('/create',usercontroller.create);
route.post('/create_session',usercontroller.create_session);
route.post('/out',usercontroller.out);
route.get('/post_item',usercontroller.post_item);
route.post('/item_post',usercontroller.item_post);
module.exports= route;