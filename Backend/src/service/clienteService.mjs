import clienteRepository from "../repository/ClienteRepository.mjs";

export async  function obtenerClientesService(){
    return await clienteRepository.getAll();
}

export async function obtenerClienteService(id) {
    return await clienteRepository.getById(id);
}

export async function agregarClienteService(cliente) {
    return await clienteRepository.insert(cliente);   
}

export async function eliminarClienteService(id) {
    return await clienteRepository.delete(id);
}

export async function actualizarClienteService(id, cliente) {
    return await clienteRepository.update(id, cliente);
}