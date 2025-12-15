import { body } from "express-validator";

export const validarCliente = () => [
    body("nombre")
    .trim()
    .notEmpty().withMessage('El nombre del cliente es obligatorio.')
    .isLength({min:3, max:100}).withMessage('El nombre del cliente debe tener entre 3 y 100 caracteres.')
    .matches(/[a-zA-Z]/).withMessage("El nombre del cliente no puede ser solo numérico.")

]