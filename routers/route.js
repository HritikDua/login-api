const router = require('express').Router();
const {body} = require('express-validator');
const {register} = require('../controllers/newUser');
const {login} = require('../controllers/loginController');
const {getUser} = require('../controllers/getUser');

router.post('/register', [
    body('name',"Name should be complete")
    .notEmpty()
    .escape()
    .trim()
    .isLength({ min: 3 }),
    body('phone_number',"Phone number should be of 10 digits")
    .notEmpty()
    .escape()
    .trim()
    .isLength({min : 10, max : 10}),
    body('password',"The Password must be of minimum 4 characters length")
    .notEmpty()
    .trim()
    .isLength({ min: 4 }),
], register);


router.post('/login',[
    body('phone_number',"Phone number should be of 10 digits")
    .notEmpty()
    .escape()
    .trim()
    .isLength({min : 10 , max : 10}),
    body('password',"The Password must be of minimum 4 characters length")
    .notEmpty()
    .trim()
    .isLength({ min: 4 }),
],login);

router.get('/getuser',getUser);

module.exports = router;