const express = require('express');

const app = express();
const path = require('path');

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// app.post('/api/notes', (req, res) => {
//     // read db.json
//     fs.readFile('./db/db.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         // parse notes and add new note
//         const notes = JSON.parse(data);
//         const newNote = req.body;
//         newNote.id = notes.length + 1; // simple way to add unique id
//         notes.push(newNote);

//         // write updated notes back to db.json
//         fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
//             if (err) {
//                 console.error(err);
//                 return res.sendStatus(500);
//             }
//             res.json(newNote);
//         });
//     });
// });

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
