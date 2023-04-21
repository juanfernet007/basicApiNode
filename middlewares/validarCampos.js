const { validationResult } = require('express-validator');


const validarCampos = (req, res, next) => {
   
    //la validación de campos de llegada se hacen 
  //en el middleware del check creado por express-validator, en el route
  const errores = validationResult( req );
  if( !errores.isEmpty() ){
    return res.status(400).json( errores );
  }

  next();

}

module.exports = { validarCampos }
