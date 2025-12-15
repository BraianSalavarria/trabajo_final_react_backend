import { body } from "express-validator";

export const validarUser = () => [
    body("username")
    .trim()
    .notEmpty().withMessage('El nombre de usuario es obligatorio.')
    .isLength({min:3, max:100}).withMessage('El nombre del cliente debe tener entre 3 y 100 caracteres.')
    .matches(/[a-zA-Z]/).withMessage("El nombre del cliente no puede ser solo numérico."),

    body('email')
    .isEmail().withMessage('Formato de correo inválido')
    .isLength({ max: 100 }).withMessage('El correo no debe superar los 100 caracteres')
    .normalizeEmail(),

    body('password')
      .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
      .matches(/[A-Za-z]/).withMessage('Debe contener al menos una letra')
      .matches(/[0-9]/).withMessage('Debe contener al menos un número'),
 


]

export const validarUserLogin = () => [
 
    body('email')
    .isEmail().withMessage('Formato de correo inválido')
    .isLength({ max: 100 }).withMessage('El correo no debe superar los 100 caracteres')
    .normalizeEmail(),

    body('password')
      .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
      .matches(/[A-Za-z]/).withMessage('Debe contener al menos una letra')
      .matches(/[0-9]/).withMessage('Debe contener al menos un número'),
 


]