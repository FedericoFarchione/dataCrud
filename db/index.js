const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dataCRUD', { useNewUrlParser: true });
//-----> DATACRUD E IL NOME EFFETTIVO DEL NOSTRO DATABASE e la collection e user che abbiamo stabilito nel controller


module.exports = mongoose;
//127.0.0.1:27017
