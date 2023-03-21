const { response } = require('express');
const express = require('express');
const app = express();
const port = 8080;

const knex = require('knex')(require('../knexfile.js')['development']);

app.get('/', (req, res) => {
  res.send('Application up and running.')
});

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(pets => {
      let petNames = pets.map(pet => {
        return pet.name;
      })
      res.json(petNames);
    })
    // .from()
});

app.listen(port, () => {
  console.log('Your knex and express application are running.')
});