const { Router } = require('express');
const { check, body } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');

const router = Router();
const { getUsuarios,
        postUsuario,
        putUsuario,
        deleteUsuario,
        pathcUsuario } = require('../controllers/usuariosController');



router.get('/', getUsuarios)

router.post('/', 

    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe ser de mas de 6 letras').isLength( { min : 6 } ),        
        check('correo','Esto no es un correo').isEmail(),        
        check('rol','El rol debe ser un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),        
        validarCampos
    ]
    , postUsuario )

router.put('/', putUsuario)

router.patch('/', pathcUsuario)

router.delete('/:id', deleteUsuario);

module.exports = router;