import express from "express";
import {addUserIdAndBookIdToFinishedBooks} from "../database.js";

const addFinishedBooksRouter = express.Router();

addFinishedBooksRouter.post("/add-to-finsied-books", async (req, res) => {
    try {
        const {userID, bookId} = req.body;
        const addBook = await addUserIdAndBookIdToFinishedBooks(userID, bookId);
        res.status(201).json({status: "success", addBook});
    } catch (error) {
        console.log(error);
    }
})

export default addFinishedBooksRouter;

