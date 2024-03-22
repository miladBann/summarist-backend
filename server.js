import express from "express";
import cors from "cors";
import loginRouter from "./routes/login.js";
import registerRouter from "./routes/register.js";
import getUserIdRouter from "./routes/getUserId.js";
import addUserToLibraryRouter from "./routes/addToLibrary.js";
import checkIfUserSavedBook from "./routes/checkSavedBooks.js";
import getUserBooksRouter from "./routes/getUserBooks.js";
import addFinishedBooksRouter from "./routes/addToFinishedBooks.js";
import checkFinishedBooksRouter from "./routes/checkFinishedBook.js";
import getFinishedBooksRouter from "./routes/getFinishedBooks.js";
import addPremiumUserRouter from "./routes/addPremiumUser.js";
import checkPremiumUserRouter from "./routes/checkPremiumUser.js";


const app = express();
app.use(cors());
app.use(express.json());


app.use(loginRouter);
app.use(registerRouter);
app.use(getUserIdRouter);
app.use(addUserToLibraryRouter);
app.use(checkIfUserSavedBook);
app.use(getUserBooksRouter);
app.use(addFinishedBooksRouter);
app.use(checkFinishedBooksRouter);
app.use(getFinishedBooksRouter);
app.use(addPremiumUserRouter);
app.use(checkPremiumUserRouter);


app.listen(8080, () => {
    console.log("server is running on port 8080");
})