import express from "express";
import {getUser} from "../database.js";

const loginRouter = express.Router();

loginRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await getUser(email, password);

    if (user !== undefined) {
        if (user.email === email && user.user_password === password) {
            res.json({ status: 'success', user });
        }
    } else {
        res.status(401).json({ status: 'failure', message: 'Invalid email or password' });
    } 
})

export default loginRouter;

