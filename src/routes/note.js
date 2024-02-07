const { Router } = require('express');
const noteRouter = Router();
const createNote = require('../handlers/Note/createNoteHandler');
const deleteNote = require('../handlers/Note/deleteNoteHandler');
const editNote = require('../handlers/Note/editNoteHandler');
const allNotes = require('../handlers/Note/allNoteHandler');
const archiveNote = require('../handlers/Note/archiveNoteHandler');
const unArchiveNote = require('../handlers/Note/unArchiveNoteHandler');
const activeNote = require('../handlers/Note/activeNoteHandler');
const unActiveNote = require('../handlers/Note/unActiveNoteHandler')

// OK
noteRouter.post('/create', createNote);

// OK
noteRouter.put('/edit/:id', editNote);

// OK
noteRouter.delete('/delete/:id', deleteNote);

// OK
noteRouter.get('/all', allNotes);

// OK
noteRouter.put('/archive/:id', archiveNote)

// OK
noteRouter.put('/unarchive/:id', unArchiveNote);

// OK
noteRouter.put('/active/:id', activeNote);

// OK
noteRouter.put('/unactive/:id', unActiveNote);

module.exports = noteRouter;