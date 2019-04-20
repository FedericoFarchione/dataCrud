const UserSchema = require('./user.module.js') //<-- RICHIAMO PAGINA MODULE X ANDARE A SALVARE
/*
const user = req.body.User CON USER ALLA FINE MI CREA UN OGGETTO VUOTO PERCHE???
*/

const scrivi = (req, res, next)=>{
  res.end('helloworld')
};

const saveNewUser = async(req, res, next)=>{
  const user = req.body;
  const presave = new UserSchema.User(user);
  const result = await presave.save(function(err) {
    if (err) throw err;
    console.log('Salvataggio completato');
  });
  res.status(201).send('POSTsuccess')
  res.end();
  return
}
/////////////////  GET  ////////////////////
const ricevi = (req, res, next)=>{
  const x = req.params.par1;
  const y = new UserSchema.Model({
      'request': x,
      'time': Math.floor(Date.now() / 1000) // Time of save the data in unix timestamp format
  }).save()
  res.send('Salvato ' + x )
};

///////////////  PUT  /////////////////////////////
const modify = async(req, res, next)=>{
  const user = req.body;
  // if (user._id == true){
  const result = await UserSchema.User.findOneAndUpdate({_id:user._id}, user);
  res.status(201).send('PUTsuccess')
  res.end();
  return
//}
};

////////////////  DELETE  /////////////////////////

const cancella  = async (req, res, next)=>{
  const user = req.body
  await UserSchema.User.deleteOne({ nome: user.nome }, function (err) {
  if (!err){
    res.send('ELIMINATO');
  } else res.send('NOME NON CORRISPONDE');;
    res.end()
});

}



module.exports = {
  scrivi,
  saveNewUser,
  modify,
  ricevi,
  cancella
};
