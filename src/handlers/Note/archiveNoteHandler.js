const archiveNoteController = require('../../controllers/Note/archiveNoteController');

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        await archiveNoteController(id);
        res.status(201).json({ message: 'La nota ha sido archivada correctamente!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}