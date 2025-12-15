import IRepository from "./IRepository.mjs";
import User from "../models/User.mjs";

class UserRepository extends IRepository{


async getAll(){
    try{
        const users = await User.find();
        return users;
    }catch(error){
        throw new Error(`Error al obtener usuarios: ${error.message}`);
    }
}
/* ya lo registramos en auth
async insert (client){
    try{
            const newClient = new Cliente(client);
            return await newClient.save();
    }catch(error){
        throw new Error(`Error al insertar un nuevo cliente: ${error.message}`);
    }
}
*/
async getById(id){
    try{
            const user = await User.findById(id);
            return user;
    }catch(error){
        throw new Error(`Error al obtener user: ${error.message}`);
    }
}

async delete(id){
    try{
        const removedUser = await User.findByIdAndDelete(id);
        return removedUser;

    }catch(error){
        throw new Error(`Error al eliminar usuario: ${error.message}`);
    }
}

async update(id, user){
    try{

        const updatedUser = await User.findByIdAndUpdate(id, user,{new:true});
        if(!updatedUser){
            throw new Error(`Error al actualizar User con id: ${id}`)
        }
        return updatedUser;

    }catch(error){
        throw new Error(`Error al actualizar User: ${error.message}`);
    }
}

}

const userRepository = new UserRepository();
export default userRepository;