const { User } = require('../../db');

const createUserController = async (email, password) => {
    try {
        await User.create({ email, password });
    } catch (error) {
        throw new Error(`Error al crear el usuario: ${error.message}`);
    }
};

module.exports = createUserController;
