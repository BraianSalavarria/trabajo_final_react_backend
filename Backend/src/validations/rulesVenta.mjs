import {body} from "express-validator";

export const validarVenta= ()=>[
body("cliente.id")
.notEmpty().withMessage("El cliente es obligatorio.")
.isMongoId().withMessage("El id de cliente debe ser valido."),

body("items")
.isArray({min:1}).withMessage("Debe haber al menos un item en la venta."),

body("items.*.id")
.notEmpty().withMessage("El producto es obligatorio.")
.isMongoId().withMessage("El id del producto debe ser valido."),

body("items.*.cantidad")
.notEmpty().withMessage("La cantidad es obligatoria.")
.isInt({min:1}).withMessage("La cantidad debe ser un número valido mayor que cero."),


]   