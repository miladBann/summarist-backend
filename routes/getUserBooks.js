import express from "express";
import {getUserSavedBooks} from "../database.js";

const getUserBooksRouter = express.Router();

getUserBooksRouter.post("/get-user-books", async (req, res) => {
    try {
        const {user_id} = req.body;
        const books = await getUserSavedBooks(user_id);
        res.status(201).json({status: "success", books});
    } catch (error) {
        console.log(error);
    }
})

export default getUserBooksRouter;

