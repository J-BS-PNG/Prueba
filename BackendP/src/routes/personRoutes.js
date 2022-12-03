import { getPersons, getPerson, createPerson } from "../controller/personController.js"
import { Router } from "express"

const router = Router();

router.get('/persons', async (req, res) => {
    const persons = await getPersons();
    res.send(persons);
});

router.get('/persons/:id', async (req, res) =>{
    const id = req.params.id;
    const person = await getPerson(id);
    res.send(person);
})

router.post('/persons', async (req, res) => {
    const {name, date, photo} = req.body;
    const person = await createPerson(name, date, photo);
    res.status(201).send(person);
})

export default router
