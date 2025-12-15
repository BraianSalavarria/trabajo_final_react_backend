import express from 'express';
import { agregarVentaController, obtenerVentaController, obtenerVentasController, eliminarVentaController, actualizarVentaController} from '../controller/ventaController.mjs';
import { validarVenta } from '../validations/rulesVenta.mjs';
import { handleValidationErrors } from '../validations/mildwareError.mjs';
import { authenticateToken, hasPermission } from '../validations/authmidleware.mjs';

const router = express.Router();


//metodos get
router.get('/ventas/', authenticateToken,hasPermission('read:ventas'),obtenerVentasController);
router.get('/ventas/:id',authenticateToken,hasPermission('read:ventas'), obtenerVentaController);

//metodos post
router.post('/ventas/',authenticateToken,hasPermission('create:ventas'),validarVenta(),handleValidationErrors,agregarVentaController);

//metodos put
router.put('/ventas/:id',authenticateToken,hasPermission('update:ventas'),validarVenta(),handleValidationErrors,actualizarVentaController);

//metodos delete
router.delete('/ventas/:id',authenticateToken,hasPermission('delete:ventas'),eliminarVentaController);
export default router;