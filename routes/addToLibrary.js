import express from "express";
import {addUserIdAndBookId} from "../database.js";

const addUserToLibraryRouter = express.Router();

addUserToLibraryRouter.post("/add-to-library", async (req, res) => {
    try {
        const {email, bookId} = req.body;
        const addBook = await addUserIdAndBookId(email, bookId);
        res.status(201).json({status: "success", addBook});
    } catch (error) {
        console.log(error);
    }   
})

export default addUserToLibraryRouter;

