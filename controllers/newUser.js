const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const conn = require('../db/db');

exports.register = async(req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    try{

        const [row] = await conn.execute(
            "SELECT `phone_number` FROM `customers` WHERE `phone_number`=?",
            [req.body.phone_number]
          );

        if (row.length > 0) {
            return res.status(201).json({
                message: "The phone number is already in use",
            });
        }

        const hashPass = await bcrypt.hash(req.body.password, 12);

        const [rows] = await conn.execute('INSERT INTO `customers`(`name`,`phone_number`,`password`) VALUES(?,?,?)',[
            req.body.name,
            req.body.phone_number,
            hashPass
        ]);

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The user has been successfully inserted.",
            });
        }
        
    }catch(err){
        res.send("some error occured");
    }
}