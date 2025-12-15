import Producto from '../models/Productos.mjs'
import IRepository from './IRepository.mjs'

class ProductoRepository extends IRepository {

async getAll(){
    try{
    const products = await Producto.find();
    return products;
    
    }catch(error){
        throw new Error(`Error al obtener productos: ${error.message}`);
    }
}

async insert (product){ 
  try{
        const newProduct = new Producto(product);
        return await newProduct.save();
   
    }catch(error){
        throw new Error(`Error al insertar un nuevo producto: ${error.message}`)
    }
}

async getById(id){
    try{
    const product = await Producto.findById(id);
    return product;

    }catch(error){
        throw new Error(`Error: ${error.message}`);
    }

}

async delete (id){
 try{
    const removedProduct = await Producto.findByIdAndDelete(id);
    return removedProduct;

 }catch(error){
    throw new Error(`Error al eliminar producto: ${error.message}`);
 }
}

async update (id, product){
  try{  
    const updatedProduct = await Producto.findByIdAndUpdate(id,product,{new: true});
    if(!updatedProduct) { 
        throw new Error('Error al actualizar el producto');
    }
    return updatedProduct;

    }catch(error){
        throw new Error(`Error al actualizar producto: ${error.message}`);
    } 
}


}

const productoRepository = new ProductoRepository();
export default productoRepository;