import IRepository from './IRepository.mjs'
import Venta from '../models/Ventas.mjs';

class VentaRepository extends IRepository{

  async getAll(){
    try{
    
        const sales = await Venta.find().populate('items.producto', 'descripcion').populate('cliente', 'nombre');//con populate puedo traer el objeto completa referenciado o solo una parte.
        return sales;

    }catch(error){
        throw new Error(`Error al obtener ventas: ${error.message}`);
    }
  }

  async insert(sale){
    try {
        const newSale = new Venta(sale);
        return await newSale.save();
        
    } catch (error) {
        throw new Error(`Error al registrar venta: ${error.message}`);
    }
  }

  async getById(id){
    try {
        const sale = await Venta.findById(id);
        return sale;

    } catch (error) {
        throw new Error(`Error al obtener venta: ${error.message}`);
    }
  }

async delete(id){
    try {
        const removedSale = await Venta.findByIdAndDelete(id);
        return removedSale;
        
    } catch (error) {
        throw new Error(`Error al eliminar venta: ${error.message}`);
    }
}

async update(id,sale){
    try {
        const updatedSale = await Venta.findByIdAndUpdate(id,sale, {new:true});
        if(!updatedSale){
            throw new Error(`Error al actualizar venta.`);
        }
        return updatedSale;

    } catch (error) {
        throw new Error(`Error al actualizar venta: ${error.message}`);
    }
}

}

const ventaRepository = new VentaRepository();
export default ventaRepository;