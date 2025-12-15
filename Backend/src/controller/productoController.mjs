import {obtenerProductoService, obtenerProductosService, agregarProductoService, actualizarProductoService, eliminarProductoService} from '../service/productoService.mjs'

export async function obtenerProductosController(req, res) {
    try{
    const productos = await obtenerProductosService();
    res.status(200).json(productos)

    }catch(error){
        res.status(500).json({error: error.message })
    }
    
}

export async function obtenerProductoController(req, res) {
   try{
    const {id} = req.params;
    const producto = await obtenerProductoService(id);
    if(!producto){
        res.status(404).json({error: 'no se ha encontrado producto.'})
    }
    res.status(200).json(producto);

   }catch(error){
    res.status(500).json({'error': error.message});
   }
}

export async function agregarProductoController(req,res){
    try{
         const producto = req.body;
         const productoNuevo = await agregarProductoService(producto);
         if(productoNuevo){
            return res.status(201).json(productoNuevo)
         }
         return res.status(400).json({error:'no se podido guardar el producto.'})

    }catch(error){
            res.status(500).json({error:`se ha producido un error: ${error.message}`})
    }

}

export async function actualizarProductoController(req, res) {
    try{
            const producto = req.body;
            const {id} = req.params;
            const productoActualizado = await actualizarProductoService(id,producto);
            if(productoActualizado){
                return res.status(200).json(productoActualizado)
            }
            return res.status(400).json({error:'no se podido actualizar el producto.'})
            
    }catch(error){
        res.status(500).json({error:`se ha producido un error:${error.message}`})
    }
    
}

export async function eliminarProductoController(req, res) {
    try{

    const {id} = req.params;
    const productoEliminado = await eliminarProductoService(id);
    if(productoEliminado){
        return res.status(200).json(productoEliminado)
    }
    return res.status(404).json({error:'No se podido eliminar producto'})

    }catch(error){
        res.status(500).json({error:`se ha producido un error:${error.message}`})
    }
}