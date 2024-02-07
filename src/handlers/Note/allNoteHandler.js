const allNoteHandler = require('../../controllers/Note/allNoteController');

module.exports = async (req, res) => {
    try {
        const response = await allNoteHandler();
        res.status(201).json({ message: response });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}