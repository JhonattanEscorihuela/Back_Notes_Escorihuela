const unActiveNoteController = require('../../controllers/Note/unActiveNoteController')

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        await unActiveNoteController(id);
        res.status(201).json({ message: 'La nota ha sido des-activada correctamente!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}