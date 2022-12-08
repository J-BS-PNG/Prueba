import { getPersons, getPerson, createPerson, updatePerson, deletePerson} from "../controller/personController.js"
import { Router } from "express"

const router = Router();

router.get('/persons', async (req, res) => {
    const persons = await getPersons();
    res.send(persons);
});

router.get('/persons/:id', async (req, res) =>{
    // idPerson = Cedula
    const idPerson = req.params.id;
    const person = await getPerson(idPerson);
    res.send(person);
})

router.post('/persons', async (req, res) => {
    const {identificaction, name, middleName, surname, secondSurname, birthDay, photo} = req.body;
    const person = await createPerson(identificaction, name, middleName, surname, secondSurname, birthDay, photo);
    res.status(201).send(person);
})

router.delete('/persons/:id', async (req, res) => {
    //idPerson = cedula
    const idPerson = req.params.id;
    const quitPerson = await deletePerson(idPerson);
    res.send(quitPerson);
})

router.put('/persons/:id', async (req, res) => {
    //idPerson = cedula
    const idPerson = req.params.id;
    const {identificaction, name, middleName, surname, secondSurname, birthDay, photo} = req.body;
    const person = await updatePerson(idPerson, identificaction, name, middleName, surname, secondSurname, birthDay, photo);
    res.status(201).send(person);
})

export default router
