import 'dotenv/config';
import mongoose from "mongoose";
import  Permission  from "../models/Permission.mjs";
import Role from "../models/Role.mjs";
import { connectDB } from "../config/dbConfig.mjs";


const initialPermissions = [
    //permisos asociados a los productos
    {
        name: 'read:productos',
        description: 'Puede ver productos'
    },
    {
        name: 'create:productos',
        description: 'Puede crear productos'
    },
    {
        name: 'update:productos',
        description: 'Puede actualizar productos'
    },
    {
        name: 'delete:productos',
        description: 'Puede eliminar clientes'
    },
        //permisos asociados a los clientes
     {
        name: 'read:clientes',
        description: 'Puede ver clientes'
    },
    {
        name: 'create:clientes',
        description: 'Puede crear clientes'
    },
    {
        name: 'update:clientes',
        description: 'Puede actualizar clientes'
    },
    {
        name: 'delete:clientes',
        description: 'Puede eliminar clientes'
    },
    //permisos asociadas a las ventas
     {
        name: 'read:ventas',
        description: 'Puede ver ventas'
    },
    {
        name: 'create:ventas',
        description: 'Puede crear ventas'
    },
    {
        name: 'update:ventas',
        description: 'Puede actualizar ventas'
    },
    {
        name: 'delete:ventas',
        description: 'Puede eliminar ventas'
    },
    //permisos asociados a los usuarios
    {
        name: 'read:user',
        description: 'Puede ver usuarios'
    },
    {
        name: 'create:user',
        description: 'Puede crear usuarios'
    },
    {
        name: 'update:user',
        description: 'Puede actualizar usuario'
    },
    {
        name: 'delete:user',
        description: 'Puede eliminar usuario'
    }
];

const initialRoles = [
    {
        name: 'user',
        description: 'Usuario básico ~ acceso a las operaciones asociadas al reparto',
        permissions: ['read:productos','read:clientes','read:ventas','create:ventas']
    },
    {
        name: 'admin',
        description: 'Administrador del sistema',
        permissions: [ 'read:productos', 'create:productos', 'update:productos', 'delete:productos',
                       'read:clientes', 'create:clientes', 'update:clientes', 'delete:clientes',
                       'read:ventas', 'create:ventas', 'update:ventas', 'delete:ventas',
                       'read:user', 'create:user','update:user','delete:user',
        ]
    }
];

async function initializeRolesAndPermissions() {
    try {
        await connectDB()
        console.log('Conectado a MongoDB');

        // Limpiar colecciones existentes
        await Permission.deleteMany({});
        await Role.deleteMany({});
        console.log('Colecciones limpiadas');

        // Crear permisos
        const createdPermissions = await Permission.insertMany(initialPermissions);
        console.log('Permisos creados exitosamente');

        // Crear mapa de permisos
        const permissionsMap = createdPermissions.reduce((map, permission) => {
            map[permission.name] = permission._id;
            return map;
        }, {});

        // Crear roles con referencias a permisos
        const rolesToCreate = initialRoles.map(role => ({
            name: role.name,
            description: role.description,
            permissions: role.permissions.map(permName => permissionsMap[permName])
        }));

        await Role.insertMany(rolesToCreate);
        console.log('Roles creados exitosamente');

    } catch (error) {
        console.error('Error inicializando roles y permisos:', error);
    } finally {
        await mongoose.disconnect();
    }
}

initializeRolesAndPermissions();