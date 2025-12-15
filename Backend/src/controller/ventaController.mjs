import Venta from "../models/Ventas.mjs";
import { obtenerClienteService } from "../service/clienteService.mjs";
import { obtenerProductoService, obtenerProductosService } from "../service/productoService.mjs";
import { obtenerVentasService, obtenerVentaService, agregarVentaService, eliminarVentaService, actualizarVentaService } from "../service/ventaService.mjs";

export async function obtenerVentasController(req, res) {
    try {
        const ventas = await obtenerVentasService();
        return res.status(200).json(ventas);
    } catch (error) {
         res.status(500).json({error:`se ha producido un error: ${error.message}`});
    }
}

export async function obtenerVentaController(req, res) {
   try{
    const {id} = req.params;
    const venta = await obtenerVentaService(id);
    if(!venta){
       return res.status(404).json({error:'no se ha encontrado venta'});
    }
    return  res.status(200).json(venta);

    }catch(error){
         res.status(500).json({error:`se ha producido un error: ${error.message}`});
    }
}


export async function agregarVentaController(req, res) {
    try {
        let itemsFactura=[];
        let total=0;
        const productosBD = await obtenerProductosService();
        const {cliente, items} = req.body;

        const clienteEncontrado = await obtenerClienteService(cliente.id)
        if(!clienteEncontrado){
           return res.status(400).json({error:'Cliente no encontrado.'});
        }

        for(const item of items){
            const producto = productosBD.find( p => String(p._id) === String(item.id) )
            if(!producto){
                return res.status(404).json({error:'producto no encontrado'})
            }
    
            itemsFactura.push(
                {
                    producto:producto,
                    cantidad:item.cantidad,
                    precioUnitario:producto.precio,
                    subTotal:(item.cantidad * producto.precio)
                }
            )


            total+=(producto.precio * item.cantidad);
        }
            
        const venta ={
            cliente:clienteEncontrado,
            items:itemsFactura,
            total:total
        }

        const ventaRealizada = await agregarVentaService(venta);
        if(!ventaRealizada){
            return res.status(400).json({error:'No pudo registrarse la venta.'})
        }

        return res.status(201).json(ventaRealizada);

    } catch (error) {
        res.status(500).json({error:`se ha producido un error: ${error.message}`});
    }
}


export async function actualizarVentaController(req, res) {
    try {
        const {id} =req.params;
        const {cliente, items} = req.body;

        let itemsFactura=[];
        let total=0;
        const productosBD = await obtenerProductosService();
        

        const clienteEncontrado = await obtenerClienteService(cliente.id)
        if(!clienteEncontrado){
           return res.status(400).json({error:'Cliente no encontrado.'});
        }

        for(const item of items){
            const producto = productosBD.find( p => String(p._id) === String(item.id) )
            if(!producto){
                return res.status(404).json({error:'producto no encontrado'})
            }
    
            itemsFactura.push(
                {
                    producto:producto,
                    cantidad:item.cantidad,
                    precioUnitario:producto.precio,
                    subTotal:(item.cantidad * producto.precio)
                }
            )


            total+=(producto.precio * item.cantidad);
        }
            
        const venta ={
            cliente:clienteEncontrado,
            items:itemsFactura,
            total:total
        }

        const ventaActualizada = await actualizarVentaService(id,venta);
        if(!ventaActualizada){
            return res.status(400).json({error:'No pudo modificarse la venta.'})
        }

        return res.status(200).json(ventaActualizada);

    } catch (error) {
        res.status(500).json({error:`se ha producido un error: ${error.message}`});
    }
}



export async function eliminarVentaController(req, res) {
    try {
        const {id} = req.params;
        const ventaEliminada = await eliminarVentaService(id);
        if(ventaEliminada){
            return res.status(200).json(ventaEliminada);
        }
        return res.status(400).json({error:'No se ha podido eliminar la venta.'})
    } catch (error) {
        res.status(500).json({error:`se ha producido un error:${error.message}`});
        
    }
    

}