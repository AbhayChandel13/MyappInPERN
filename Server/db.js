const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "rootUser",
    port: 5433,
})

module.exports = pool;