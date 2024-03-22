import express from "express";
import {checkPremiumUser} from "../database.js";

const checkPremiumUserRouter = express.Router();

checkPremiumUserRouter.post("/check-premium-user", async (req, res) => {
    try {
        const {email} = req.body;
        const checkUser = await checkPremiumUser(email);
        res.status(201).json({status: "success", checkUser});
    }catch (error) {
        console.log(error);
    }
})

export default checkPremiumUserRouter;

