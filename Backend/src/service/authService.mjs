import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from '../models/User.mjs'
import Role from "../models/Role.mjs";

class AuthService {

/*
// Método para registrar un nuevo usuario
async register(userData) {
    // Verificamos si ya existe un usuario con el mismo email o username
    const existingUser = await User.findOne({ 
        $or: [
            { email: userData.email },
            { username: userData.username }
        ]
    });

    // Si existe lanzamos un error
    if (existingUser) {
        throw new Error('Usuario o email ya existe');
    }

    // Encriptamos la contraseña antes de crear el usuario usando bcrypt
    const hashedPassword = await bcrypt.hash(userData.password, 10);

        // Buscamos el rol por defecto

    const defaultRole = await Role.findOne({ name: 'user' });

    if(!defaultRole){
        throw new Error('Rol por defecto no encontrado');
    }


    // Creamos una nueva instancia del modelo User con los datos recibidos
    const user = new User({
        ...userData,
        password: hashedPassword,
        role: defaultRole._id
    });

    //guardamos nuestro usuario en la base de datos
    await user.save();

    
    // Convertimos el documento mongoose a un objeto plano
    const userResponse = user.toObject();

    //eliminamos la contraseña por seguridad
    delete userResponse.password;

    // Generamos un token JWT para el usuario
    const token = this.generateToken(user);

    // Retornamos el usuario (sin password) y su token
    return { user: userResponse, token };
}

*/

// Método para iniciar sesión
async login(email, password) {
    // Buscamos el usuario por email
    const user = await User.findOne({ email }).populate('role','name');
    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    // Verificamos si la contraseña es correcta
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        throw new Error('Correo o contraseña incorrectos');
    }

    
        // Convertimos el usuario a objeto plano y eliminamos la contraseña
        const userResponse = user.toObject();
        delete userResponse.password;

        // Generamos un nuevo token y retornamos la respuesta
        const token = this.generateToken(user);
        return { user: userResponse, token };

}

//nuevo register:
async register(userData) {
    const existingUser = await User.findOne({ 
        $or: [
            { email: userData.email },
            { username: userData.username }
        ]
    });

    if (existingUser) {
        throw new Error('Usuario o email ya existe');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // ✅ NUEVO: Variable para almacenar el rol a asignar
    let roleToAssign;
    
    // ✅ NUEVO: Verifica si se envió un roleId
    if (userData.roleId) {
        // Si se envió roleId, lo busca y valida
        roleToAssign = await Role.findById(userData.roleId);
        if (!roleToAssign) {
            throw new Error('Rol especificado no encontrado');
        }
    } else {
        // Si NO se envió roleId, usa el rol por defecto
        roleToAssign = await Role.findOne({ name: 'user' });
        if (!roleToAssign) {
            throw new Error('Rol por defecto no encontrado');
        }
    }

    // ✅ MODIFICADO: Usa roleToAssign en lugar de defaultRole
    // ✅ MODIFICADO: Usa campos específicos en lugar de spread operator
    const user = new User({
        username: userData.username,
        email: userData.email,
        password: hashedPassword,
        role: roleToAssign._id
    });

    await user.save();

    const userResponse = user.toObject();
    delete userResponse.password;

    const token = this.generateToken(user);

    return { user: userResponse, token };
}








 // Método auxiliar para generar tokens JWT
 generateToken(user) {
    // Creamos un token que incluye el id, rol y permisos del usuario
   
    return jwt.sign(
        { 
            id: user._id,
            role: user.role,
            permissions: user.permissions
        },
        // Usamos la clave secreta del .env
        process.env.clave_jwt,
        // El token expira en 24 horas
        { expiresIn: '24h' }
    );
}

//metodo para asignar un rol a un usuario

 async assignRole(userId, roleId) {
        // Verificar que el usuario existe
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        // Verificar que el rol existe
        const role = await Role.findById(roleId);
        if (!role) {
            throw new Error('Rol no encontrado');
        }

        // Asignar el rol al usuario
        user.role = roleId;
        await user.save();

        // Retornar el usuario actualizado sin la contraseña
        const userResponse = user.toObject();
        delete userResponse.password;

        return {
            message: 'Rol asignado correctamente',
            user: userResponse
        };
    }












}

export const authService = new AuthService();