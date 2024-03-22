import express from "express";
import {checkIfUserSavedBook} from "../database.js";

const checkSavedBookRouter = express.Router();

checkSavedBookRouter.post("/check-book-saved", async (req, res) => {
    try {
        const {userId, bookId} = req.body;
        const checkBook = await checkIfUserSavedBook(userId, bookId);
        res.status(201).json({status: "success", checkBook});
    } catch (error) {
        console.log(error);
    }  
})

export default checkSavedBookRouter;

