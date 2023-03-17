const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');


 getUsuarios = (req, res = response) => {

    const {nombre, apellido, page = 1, limit } = req.query;

    res.json({
        msg : "get API - controlador ",
        nombre,
        apellido,
        page,
        limit
    })
  }

 postUsuario = async (req, res = response ) => {
  
  //la validación de campos de llegada se hacen 
  //en el middleware del check creado por express-validator, en el route
  const errores = validationResult( req );
  if( !errores.isEmpty() ){
    return res.status(400).json( errores );
  }

  const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario ( { nombre, correo, password, rol } );
    
  //validar existencia del correo
  const existeEmail = await Usuario.findOne({ correo: correo});
  if(existeEmail){
    return res.status(400).json({msg : 'Ese correo ya había sido registrado previamente'})
  }

  //encriptar constraseña
  const salt = bcryptjs.genSaltSync(10);
  usuario.password = bcryptjs.hashSync(usuario.password, salt);

  //guardar usuario
    await usuario.save();

    res.json({
        msg : "post API - controlador ",
        usuario
    })
  } 

  pathcUsuario = (req, res = response ) => {
    res.json({
        msg : "patch API - controlador "
    })
  }
  
  putUsuario = (req, res = response ) => {
    res.json({
        msg : "put API - controlador "
    })
  }

  deleteUsuario = (req, res = response ) => {
    const id = req.params.id;
    res.json({
        msg :  `delete API - controlador, se eleminará ${id}`
    })
  }

  module.exports = {
    getUsuarios,
    postUsuario,
    pathcUsuario,
    putUsuario,
    deleteUsuario
  }
