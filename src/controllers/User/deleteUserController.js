const { User } = require('../../db');

module.exports = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('El usuario no existe');
        }
        await user.destroy();
    } catch (error) {
        throw new Error(`Error al eliminar el usuario: ${error.message}`);
    }
};

