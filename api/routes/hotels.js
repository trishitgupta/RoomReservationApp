import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRoom, getHotels, updateHotel } from "../controllers/hotelController.js";
import{verifyAdmin} from "../utils/verifyToken.js";

const router=express.Router();
//create
router.post("/",verifyAdmin,createHotel);

//update
router.put("/:id",verifyAdmin,updateHotel);

    //delete
    router.delete("/:id",deleteHotel);

    //get
    router.get("/find/:id",getHotel);

    //all get
    router.get("/",getHotels);

    router.get("/countByCity",countByCity);

    router.get("/countByType",countByType);

    router.get("/room/:id",getHotelRoom);


    

    



export default router