import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB
}).promise()

//Devuelve toda la información
//const result = await pool.query("SELECT * FROM person");

//Devuelve las columnas de la tabla
//const [rows] = await pool.query("SELECT * FROM person");

// async function getPersons(){
//     const [rows] = await pool.query("SELECT * FROM person");
//     return rows;
// }

// async function getPerson(id){
//     const [rows] = await pool.query(`SELECT * FROM person WHERE id = ?`, [id]); 
//     return rows;
// }

// const persons = await getPersons();
// console.log(persons);

export{pool};