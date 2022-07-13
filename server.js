const express = require('express');
const { db } = require('./db/db');
// Sets up the port, so we aren't hardcoded into just one?
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/db', (req, res) => {
    res.json(db);
})

// the On switch!
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
