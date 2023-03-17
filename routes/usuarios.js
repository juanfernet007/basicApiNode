const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();
const { getUsuarios,
    postUsuario,
    putUsuario,
    deleteUsuario,
    pathcUsuario } = require('../controllers/usuarios')


router.get('/', getUsuarios)

router.post('/', [
        check('correo','Esto no es un correo').isEmail(),
    ], postUsuario )

router.put('/', putUsuario)

router.patch('/', pathcUsuario)

router.delete('/:id', deleteUsuario);

module.exports = router;