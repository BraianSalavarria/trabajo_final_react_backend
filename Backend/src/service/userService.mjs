import userRepository from '../repository/UserRepository.mjs'

export async  function obtenerUsersService(){
    return await userRepository.getAll();
}

export async function obtenerUserService(id) {
    return await userRepository.getById(id);
}
/*
export async function agregarClienteService(user) {
    return await userRepository.insert(user);   
}
*/
export async function eliminarUserService(id) {
    return await userRepository.delete(id);
}

export async function actualizarUserService(id, user) {
    return await userRepository.update(id, user);
}