import { actualizarUserService, eliminarUserService, obtenerUserService, obtenerUsersService } from "../service/userService.mjs"

export async function obtenerUsersController(req, res) {
    try{
        const users =  await obtenerUsersService();
       return res.status(200).json(users)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export async function obtenerUserController(req, res) {
    try{
         const {id} = req.params;
        const user = await obtenerUserService(id);
         if(!user){
           return res.status(404).json({error: 'no se ha encontrado el usuario.'})
         }
        return res.status(200).json(user)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
/*
export async function agregarUserController(req, res) {
    try{
        const user = req.body;
        const userNuevo = await agregarUserService(user)
        if (clienteNuevo){
           return res.status(201).json(userNuevo);
        }
        return res.status(400).json({error:'No se ha podido guardar el user.'})
    }catch(error){
        res.status(500).json({error:`se ha producido un error: ${error.message}`})
    }
}
*/
export async function actualizarUserController(req, res) {
    try{
        const user = req.body;
        const {id} = req.params;
        const userActualizado = await actualizarUserService(id,user);
        if(userActualizado){
            return res.status(200).json(userActualizado)
        }
         return res.status(404).json({error: 'No se ha podido actualizar el usuario.'})
}catch(error){
    res.status(500).json({error:`se ha producido un error:${error.message}`})
}
}

export async function eliminarUserController(req, res) {
   try{
    const{id}=req.params;
    const userEliminado = await eliminarUserService(id);
    if(userEliminado){
        return res.status(200).json(userEliminado);
    }
   return res.status(400).json({error:'no se ha podido eliminar el user.'})
    }catch(error){
        res.status(500).json({error:`se ha producido un error:${error.message}`})
        
    }
}