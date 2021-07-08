const conn = require('../db/db');

exports.getUser = (req, res) => {
    conn.query("SELECT id, name, phone_number FROM customers", (err, results, fields) => {
        if(!err){
            res.send(results)
        }else{
            res.send("error")
        }
    })
}