// import info from "./info.js";
// var url = require("url");
// var fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(express.static('build'))

app.use(cors());

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }



const persons = [
  {
    name: "Arto Hellas",
    number: "123",
    id: 1,
  },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

app.get("/api/persons", (req, res) => {
  console.log("in the persons");
  res.json(persons);
});
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});
app.get("/info", (req, res) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const personLen = persons.length;
  res.send("Phonebook  info for " + personLen + " people"+ today.toUTCString());

});
app.post('/api/persons', (request, response) => {
  const body = request.body;
  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })}
  });

  // app.delete('/api/persons/:id', (request, response) => {
  //   const id = Number(request.params.id)
  //   persons = persons.filter(person => person.id !== id)
  
  //   response.status(204).end()
  // })

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
