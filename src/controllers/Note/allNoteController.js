const { Note } = require('../../db');

module.exports = async () => {

    const notes = await Note.findAll({})

    if (notes.length === 0) {
        throw new Error(`No hay notes en la base de datos!`)
    }
    return notes;
}