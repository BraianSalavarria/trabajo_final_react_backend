import { actualizarClienteService, agregarClienteService, eliminarClienteService, obtenerClienteService, obtenerClientesService } from "../service/clienteService.mjs"

export async function obtenerClientesController(req, res) {
    try{
        const clientes =  await obtenerClientesService();
       return res.status(200).json(clientes)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export async function obtenerClienteController(req, res) {
    try{
         const {id} = req.params;
        const cliente = await obtenerClienteService(id);
         if(!cliente){
           return res.status(404).json({error: 'no se ha encontrado el cliente.'})
         }
        return res.status(200).json(cliente)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export async function agregarClienteController(req, res) {
    try{
        const cliente = req.body;
        const clienteNuevo = await agregarClienteService(cliente)
        if (clienteNuevo){
           return res.status(201).json(clienteNuevo);
        }
        return res.status(400).json({error:'No se ha podido guardar el cliente.'})
    }catch(error){
        res.status(500).json({error:`se ha producido un error: ${error.message}`})
    }
}

export async function actualizarClienteController(req, res) {
    try{
        const cliente = req.body;
        const {id} = req.params;
        const clienteActualizado = await actualizarClienteService(id,cliente);
        if(clienteActualizado){
            return res.status(200).json(clienteActualizado)
        }
         return res.status(404).json({error: 'No se ha podido actualizar el cliente.'})
}catch(error){
    res.status(500).json({error:`se ha producido un error:${error.message}`})
}
}

export async function eliminarClienteController(req, res) {
   try{
    const{id}=req.params;
    const clienteEliminado = await eliminarClienteService(id);
    if(clienteEliminado){
        return res.status(200).json(clienteEliminado);
    }
   return res.status(400).json({error:'no se ha podido eliminar el cliente.'})
    }catch(error){
        res.status(500).json({error:`se ha producido un error:${error.message}`})
        
    }
}