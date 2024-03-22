import express from "express";
import {addPremiumUser} from "../database.js";

const addPremiumUserRouter = express.Router();

addPremiumUserRouter.post("/add-premium-user", async (req, res) => {
    try {
        const {email} = req.body;
        const addPremUser = await addPremiumUser(email);
        res.status(201).json({status: "success", addPremUser});
    }catch (error) {
        console.log(error);
    }
})

export default addPremiumUserRouter;

