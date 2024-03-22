import express from "express";
import {checkIfUserFinishedBook} from "../database.js";

const checkFinishedBooksRouter = express.Router();

checkFinishedBooksRouter.post("/check-finsied-books", async (req, res) => {
    try {
        const {userID, bookId} = req.body;
        const addBook = await checkIfUserFinishedBook(userID, bookId);
        res.status(201).json({addBook});
    } catch (error) {
        console.log(error);
    }
})

export default checkFinishedBooksRouter;

