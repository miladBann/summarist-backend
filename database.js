import mysql from "mysql2";
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool(process.env.CLEVER_CLOUD_MYSQL_CONNECTION_URL).promise();

async function getAllUsers() {
    const [rows] = await pool.query("select * from users");
    return rows;
} 

async function getUser(email, password) {
    const [rows] = await pool.query(`
        select * from users
        where email = ? and user_password = ?
    `, [email, password])
    return rows[0];
}

async function registerUser(email, password) {
    const [result] = await pool.query(`
        insert into users (email, user_password)
        values (? , ?)
    `, [email, password]);
    return result;
} 

async function getUserIdFromEmail(email) {
    const [id] = await pool.query(`
        select id from users where email = ?;
    `, [email]);
    return id[0].id;
}

async function addUserIdAndBookId(email, bookId) {
    const userID = await getUserIdFromEmail(email);

    const [result] = await pool.query(`
        insert into saved_books (user_id, book_id)
        values (? , ?);
    `, [userID, bookId]);

    return result;
}

async function checkIfUserSavedBook(user_id, book_id) {
    const [result] = await pool.query(`
        SELECT EXISTS (
            SELECT 1
            FROM saved_books
            WHERE user_id = ? AND book_id = ?
        ) AS association_exists;
    `, [user_id, book_id]);
    return result;
}

async function getUserSavedBooks(user_id) {
    const [result] = await pool.query(`
        select book_id from saved_books
        where user_id = ?;
    `, [user_id]);
    return result;
}

async function addUserIdAndBookIdToFinishedBooks(userId, bookId) {

    const [result] = await pool.query(`
        insert into finished_books (user_id, book_id)
        values (? , ?);
    `, [userId, bookId]);

    return result;
}

async function checkIfUserFinishedBook(user_id, book_id) {
    const [result] = await pool.query(`
        SELECT EXISTS (
            SELECT 1
            FROM finished_books
            WHERE user_id = ? AND book_id = ?
        ) AS association_exists;
    `, [user_id, book_id]);
    return result;
}

async function getUserFinishedBooks(user_id) {
    const [result] = await pool.query(`
        select book_id from finished_books
        where user_id = ?;
    `, [user_id]);
    return result;
}

async function addPremiumUser(email) {
    const [result] = await pool.query(`
        insert into premium_users (email) VALUES (?);
    `, [email])
    return result;
}

async function checkPremiumUser(email) {
    const [result] = await pool.query(`
        SELECT EXISTS (
            SELECT 1
            FROM premium_users
            WHERE email = ?
        ) AS association_exists;`
    , [email]);
    return result;
}

/*
const result = await checkIfUserFinishedBook("3","2l0idxm1rvw");
console.log(result);
*/

export {getAllUsers, getUser, registerUser, getUserIdFromEmail, addUserIdAndBookId, checkIfUserSavedBook, getUserSavedBooks, addUserIdAndBookIdToFinishedBooks, checkIfUserFinishedBook, getUserFinishedBooks, addPremiumUser, checkPremiumUser};