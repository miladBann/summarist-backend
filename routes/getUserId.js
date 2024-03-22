import express from "express";
import {getUserIdFromEmail} from "../database.js";

const getUserIdRouter = express.Router();

getUserIdRouter.post("/get-user-id", async (req, res) => {
    const {email} = req.body;
    const id = await getUserIdFromEmail(email);
    res.status(201).json({status: "success", id});   
})

export default getUserIdRouter;

