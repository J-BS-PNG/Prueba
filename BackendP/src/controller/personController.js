import { pool } from "../database/mysqlDB.js"

export async function getPersons(){
    const [rows] = await pool.query("SELECT * FROM person");
    return rows;
}

export async function getPerson(id){
    const [rows] = await pool.query(`SELECT * FROM person WHERE id = ?`, [id]); 
    return rows;
}

export async function createPerson(name, dateNow, photo){
    const [result] = await pool.query(`INSERT INTO person(name, date_now, photo) VALUES(?, ?, ?)`, [name, dateNow, photo]);
    return result;
}