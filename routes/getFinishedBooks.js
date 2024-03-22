import express from "express";
import {getUserFinishedBooks} from "../database.js";

const getFinishedBooksRouter = express.Router();

getFinishedBooksRouter.post("/get-finished-books", async (req, res) => {
    try {
        const {user_id} = req.body;
        const books = await getUserFinishedBooks(user_id);
        res.status(201).json({status: "success", books});
    } catch (error) {
        console.log(error);
    }
})

export default getFinishedBooksRouter;

