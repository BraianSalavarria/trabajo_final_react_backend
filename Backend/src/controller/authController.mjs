import {authService} from '../service/authService.mjs'


export const registerController= async (req, res) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.log('Error en registro:', error);
        res.status(400).json({ message: error.message });
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.login(email, password);
        res.status(200).json(result);
    } catch (error) {
        console.log('Error en login:', error);
        res.status(401).json({ message: error.message });
    }
};

export const assignRoleController = async (req, res) => {
    try {
        const { userId } = req.params;
        const { roleId } = req.body;
        
        const result = await authService.assignRole(userId, roleId);
        res.status(200).json(result);
    } catch (error) {
        console.log('Error al asignar rol:', error);
        res.status(400).json({ message: error.message });
    }
};