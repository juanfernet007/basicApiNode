const { Router } = require('express');
const router = Router();
const { getUsuarios,
    postUsuario,
    putUsuario,
    deleteUsuario,
    pathcUsuario } = require('../controllers/usuarios')


router.get('/', getUsuarios)

router.post('/', postUsuario)

router.put('/', putUsuario)

router.patch('/', pathcUsuario)

router.delete('/:id', deleteUsuario);

module.exports = router;