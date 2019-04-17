const express = require('express');
const router = express.Router();
const controller = require('./user.controller.js');
const bodyParser = require('body-parser');

//router.get('/', controller.scrivi);
router.post('/test', controller.saveNewUser);
router.put('/test/', controller.modify);
router.get('/test/:par1', controller.ricevi);
router.delete('/test', controller.cancella);
module.exports = router;



//curl --request GET --header "Content-Type: application/json" 'http://localhost:3000/test/federico'
//curl --request GET --header "Content-Type/json" 'http://localhost:3000/sesta/'par1'/'par2''
//curl --request GET --header "Content-Type/json" 'http://localhost:3000/quinta/'par1'/'par2''
//curl --request GET --header "Content-Type/json" 'http://localhost:3000/quarta/'par1'/'
//curl --request POST --header "Content-Type: application/json" 'http://localhost:3000/test' --data-binary '{nome":"gino","cognome":"fastidio","eta":"25"}'
