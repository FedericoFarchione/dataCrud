const UserSchema = require('./user.module.js') //<-- RICHIAMO PAGINA MODULE X ANDARE A SALVARE

/*
const user = req.body.User CON USER ALLA FINE MI CREA UN OGGETTO VUOTO PERCHE???
*/

const scrivi = (req, res, next)=>{
  res.end('helloworld')
};

const saveNewUser = async(req, res, next)=>{
  const user = req.body;
  const presave = new UserSchema(user);
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
  const y = x.save()
  res.send('SALVATO PARAMETRO');
};
///////////////////////////////////////////

const modify = async(req, res, next)=>{
  const user = req.body;
  // if (user._id == true){
  const result = await UserSchema.findOneAndUpdate({_id:user._id}, user);
  res.status(201).send('PUTsuccess')
  res.end();
  return
//}
};

const cancella  = async(req, res, next)=>{
  const user = req.body
  UserSchema.deleteOne({ nome: user.nome }, function (err) {
  if (!err){
    res.send('ELIMINATO');
  } else res.end('NOME NON CORRISPONDE');;

});

}



module.exports = {
  scrivi,
  saveNewUser,
  modify,
  ricevi,
  cancella
};
