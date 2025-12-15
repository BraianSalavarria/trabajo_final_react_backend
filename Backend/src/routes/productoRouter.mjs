import express from 'express'
import {obtenerProductosController, obtenerProductoController, agregarProductoController, actualizarProductoController, eliminarProductoController} from '../controller/productoController.mjs'
import {validarProducto} from '../validations/rulesProducto.mjs'
import { handleValidationErrors } from '../validations/mildwareError.mjs'
import { authenticateToken, hasPermission } from '../validations/authmidleware.mjs'

const router = express.Router()


//metodos get
router.get('/productos/',authenticateToken,hasPermission('read:productos'),obtenerProductosController);
router.get('/productos/:id',authenticateToken,hasPermission('read:productos'),obtenerProductoController);

//metodos post
router.post('/productos/',authenticateToken,hasPermission('create:productos'),validarProducto(),handleValidationErrors,agregarProductoController);

//metodos put
router.put('/productos/:id',authenticateToken,hasPermission('update:productos'),validarProducto(),handleValidationErrors,actualizarProductoController);

//metodos delete
router.delete('/productos/:id',authenticateToken,hasPermission('delete:productos'),eliminarProductoController)

export default router;