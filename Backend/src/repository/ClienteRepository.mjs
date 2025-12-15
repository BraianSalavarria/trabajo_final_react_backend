import IRepository from "./IRepository.mjs";
import Cliente from "../models/Cliente.mjs";

class ClienteRepository extends IRepository{


async getAll(){
    try{
        const clients = await Cliente.find();
        return clients;
    }catch(error){
        throw new Error(`Error al obtener clientes: ${error.message}`);
    }
}

async insert (client){
    try{
            const newClient = new Cliente(client);
            return await newClient.save();
    }catch(error){
        throw new Error(`Error al insertar un nuevo cliente: ${error.message}`);
    }
}

async getById(id){
    try{
            const client = await Cliente.findById(id);
            return client;
    }catch(error){
        throw new Error(`Error al obtener cliente: ${error.message}`);
    }
}

async delete(id){
    try{
        const removedClient = await Cliente.findByIdAndDelete(id);
        return removedClient;

    }catch(error){
        throw new Error(`Error al eliminar cliente: ${error.message}`);
    }
}

async update(id, client){
    try{

        const updatedClient = await Cliente.findByIdAndUpdate(id, client,{new:true});
        if(!updatedClient){
            throw new Error(`Error al actualizar cliente con id: ${id}`)
        }
        return updatedClient;

    }catch(error){
        throw new Error(`Error al actualizar cliente: ${error.message}`);
    }
}

}

const clienteRepository = new ClienteRepository();
export default clienteRepository;