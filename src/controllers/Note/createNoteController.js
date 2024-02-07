const { Note } = require('../../db');

const createNoteController = async (title, content, active, archived, category) => {
    try {

        await Note.create({ title, content, active, archived, category });

    } catch (error) {
        throw new Error(`Error al crear la nota: ${error.message}`);
    }
}

module.exports = createNoteController;
