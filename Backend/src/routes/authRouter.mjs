import express from 'express'
import {loginController, registerController, assignRoleController} from '../controller/authController.mjs'
import { validarUser, validarUserLogin } from '../validations/rulesUser.mjs';
import { handleValidationErrors } from '../validations/mildwareError.mjs';
import { authenticateToken, hasPermission } from '../validations/authmidleware.mjs';

const router = express.Router();

//metodos post
router.post('/register',authenticateToken, hasPermission('create:user'),validarUser(),handleValidationErrors,registerController);
router.post('/login',validarUserLogin(),handleValidationErrors, loginController)

//metodos put
// PUT /api/users/:userId/role
router.put('/:userId/role', assignRoleController);

export default router;