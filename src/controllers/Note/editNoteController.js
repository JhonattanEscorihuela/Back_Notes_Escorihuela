const { Note } = require('../../db');

const editNoteController = async (id, updatedFields) => {
    try {
        const note = await Note.findByPk(id);
        if (!note) {
            throw new Error('La nota no existe');
        }
        await note.update(updatedFields);
    } catch (error) {
        throw new Error(`Error al editar la nota: ${error.message}`);
    }
};

module.exports = editNoteController;
