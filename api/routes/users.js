import express from "express";
import { updateUser,deleteUser,getUser,getUsers } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router=express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user your are logged in");
// });

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user your are logged in and delete acc");
// });

// router.get("/checkadmin/:id:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello admin your are logged in and delete all acc");
// });





//update
router.put("/:id",verifyUser,updateUser);

    //delete
    router.delete("/:id",verifyUser,deleteUser);

    //get
    router.get("/:id",verifyUser,getUser);

    //all get
    router.get("/",verifyAdmin,getUsers);




export default router