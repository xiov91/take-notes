const express = require('express');
const { db } = require('./db/db');
const fs = require('fs');
const path = require('path');
// Sets up the port, so we aren't hardcoded into just one?
const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

let notesArray = { db };

// this function SHOULD create a new note, write it with fs, then push it to the db.json file.
// it's coming back undefined though. Insomnia let the POST request go through before this.
// I think it's the notesArray, I had to improvise from the Zookeepr example and I think I got lost...

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(db);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return db;
}

// app.get to GET the info from the db.json
app.get('/api/db', (req, res) => {
    res.json(db);
})

// app.post to create a new POST request
app.post('/api/db', (req, res) => {
    const note = createNewNote(req.body, db);

    res.json(db);
});

// the On switch!
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
