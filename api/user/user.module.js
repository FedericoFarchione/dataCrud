/*
1- richiamo la libreria mongoose;
2- alla const schema assegno mongoose.schema (una funzione di mongo);
3- alla const userschema assegno una creazionew NEW di SCHEMA quindi i dati
   richiesti nel'oggetto che dovra essere salvato;
4- a una const User assegno mongoose.model("user", userSchema) che sarebbero
   nome della collezione e appunto il tipo di collezione;
5- esporto User;
*/

const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id : Number,
  nome : String,
  cognome : String,
  eta : Number
},
{versionKey : false});

const User = mongoose.model('User', userSchema);

module.exports = User;
