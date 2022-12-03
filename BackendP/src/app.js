import express from 'express'
import person from './routes/personRoutes.js'

const app = express();

//middlewares

app.use(express.json());

//routes

app.use(person);

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


//Starting server
app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
})