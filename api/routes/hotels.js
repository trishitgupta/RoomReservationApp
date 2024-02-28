import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotelController.js";
import{verifyAdmin} from "../utils/verifyToken.js";

const router=express.Router();
//create
router.post("/",verifyAdmin,createHotel);

//update
router.put("/:id",verifyAdmin,updateHotel);

    //delete
    router.delete("/:id",deleteHotel);

    //get
    router.get("/:id",getHotel);

    //all get
    router.get("/",getHotels);


    



export default router