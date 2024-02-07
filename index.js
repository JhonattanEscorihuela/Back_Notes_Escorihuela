const server = require("./src/server");
const { conn } = require('./src/db.js');
require("dotenv").config();
const { PORT } = process.env;

conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`Server listen in port http://localhost:${PORT}`)
    })
}).catch(error => console.error(error))