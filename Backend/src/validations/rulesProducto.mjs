import { body } from "express-validator";

export const validarProducto = ()=>[
    body("descripcion")
    .trim()
    .notEmpty().withMessage('La descripcion del producto es obligatorio.')
    .isLength({min:3, max:100}).withMessage('La descripcion del producto debe tener entre 3 y 100 caracteres.')
    .matches(/[a-zA-Z]/).withMessage("El nombre del producto no puede ser solo numérico."),
    body("precio")
    .notEmpty().withMessage('El precio del producto es obligatorio.')
    .isFloat({min:1}).withMessage('El precio debe ser un numero valido.')
    
]