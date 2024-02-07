const activeNoteController = require('../../controllers/Note/activeNoteController')

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        await activeNoteController(id);
        res.status(201).json({ message: 'La nota ha sido activada correctamente!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}