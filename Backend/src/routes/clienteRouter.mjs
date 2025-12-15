import express from 'express'
import {obtenerClientesController, obtenerClienteController, agregarClienteController, actualizarClienteController, eliminarClienteController} from '../controller/clienteController.mjs'
import { validarCliente } from '../validations/rulesCliente.mjs';
import { handleValidationErrors } from '../validations/mildwareError.mjs';
import { authenticateToken, hasPermission } from '../validations/authmidleware.mjs';
const router = express.Router();

//metodos get
router.get('/clientes/',authenticateToken,hasPermission('read:clientes'),obtenerClientesController)
router.get('/clientes/:id',authenticateToken,hasPermission('read:clientes'),obtenerClienteController)

//metodos post
router.post('/clientes/',authenticateToken,hasPermission('create:clientes'), validarCliente(), handleValidationErrors, agregarClienteController)

//metodos put
router.put('/clientes/:id',authenticateToken,hasPermission('update:clientes'),validarCliente() ,handleValidationErrors,actualizarClienteController)
export default router;

//metodos delete
router.delete('/clientes/:id',authenticateToken,hasPermission('delete:clientes'),eliminarClienteController)