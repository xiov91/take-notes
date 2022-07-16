const router = require('express').Router();
const createNewNote = require('../../lib/note-functions');
const db = require('../../db/db.json');
const {notes} = require('../../db/db.json');

// when this and only this is just /notes, it at least loads the unformatted json
// also loads it when they're ALL /notes
router.get('/notes', (req, res) => {
    res.json(db);
})

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
    }
);

module.exports = router;