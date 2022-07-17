const router = require('express').Router();
const createNewNote = require('../../lib/note-functions');
const db = require('../../db/db.json');
const {notes} = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    res.json(db);
})

router.post('/api/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
    }
);

module.exports = router;