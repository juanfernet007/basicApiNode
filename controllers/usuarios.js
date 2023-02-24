const { response } = require('express');

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

 postUsuario = (req, res = response ) => {
    const { nombre, apellido } = req.body;
    res.json({
        msg : "post API - controlador ",
        nombre,
        apellido
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
