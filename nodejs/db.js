





const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "music",
    connectionLimit: 10
})

pool.query(`select * from registration`, function(err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})