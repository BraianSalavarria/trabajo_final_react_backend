import express from 'express'
import { authenticateToken, hasPermission } from '../validations/authmidleware.mjs';
import {obtenerUsersController, obtenerUserController, eliminarUserController, actualizarUserController} from '../controller/userController.mjs'


const router = express.Router();

//metodos get
router.get('/users/',authenticateToken,hasPermission('read:user'),obtenerUsersController);
router.get('/users/:id',authenticateToken,hasPermission('read:user'), obtenerUserController);

//metodos put
router.put('/users/:id',authenticateToken,hasPermission('update:user'),actualizarUserController);


//metodos delete
router.delete('/users/:id',authenticateToken,hasPermission('delete:user'),eliminarUserController);

export default router;