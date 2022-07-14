const express = require('express');
const db = require('./db/db.json');
const {notes} = require('./db/db.json');
const fs = require('fs');
const path = require('path');
// Sets up the port, so we aren't hardcoded into just one?
const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// let noteArray = db;

console.log(db);
console.log(notes);

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ db: noteArray }, null, 2)
    );

    return note;
} 

// app.get to GET the info from the db.json
app.get('/api/db', (req, res) => {
    res.json(db);
})

app.post('/api/db', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
});

// the On switch!
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});