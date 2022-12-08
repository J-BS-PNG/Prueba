import { pool } from "../database/mysqlDB.js"

export async function getPersons(){
    const [rows] = await pool.query("SELECT * FROM person");
    return rows;
}

export async function getPerson(id){
    const [rows] = await pool.query(`SELECT * FROM person WHERE identification = ?`, [id]); 
    return rows;
}

export async function createPerson(identification, name,middleName, surname, secondSurname, birthDay, photo){
    const [result] = await pool.query(`INSERT INTO person(identification, name, middle_name, surname, second_surname, birth_day, photo) VALUES(?, ?, ?, ?, ?, ?, ?)`, [identification, name, middleName, surname, secondSurname, birthDay, photo]);
    console.log(result);
    return getPerson(identification);
}

export async function updatePerson(idUpdate, identification, name,middleName, surname, secondSurname, birthDay, photo){
    const [result] = await pool.query(`UPDATE person SET identification = ?, name = ?, middle_name = ?, surname = ?, second_surname = ?, birth_day = ?, photo = ? WHERE identification = ?`, [identification, name, middleName, surname, secondSurname, birthDay, photo, idUpdate]);
    console.log(result);
    return getPerson(identification);
}

export async function deletePerson(identification){
    const result = await pool.query(`DELETE FROM person WHERE identification = ?`, [identification]);
    return result;
}