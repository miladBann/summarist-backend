import express from "express";
import {registerUser} from "../database.js";

const registerRouter = express.Router();

registerRouter.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userId = await registerUser(email, password);
        res.status(201).json({ status: 'success', userId });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(400).json({ status: 'failure', message: 'Email Already Registered' });
        } else {
            console.error(error);
            res.status(500).json({ status: 'failure', message: 'Internal server error' });
        }
    }    
})

export default registerRouter;

