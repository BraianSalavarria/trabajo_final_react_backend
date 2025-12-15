import mongoose, { Schema } from "mongoose";

const productoSchema = new mongoose.Schema(
    {
        descripcion: {type: String, required: true, unique: true},
        precio: {type: Number, required: true},
         
    },
    {
        timestamps: true
    }
);

const Producto = mongoose.model('producto',productoSchema,'productos');
 export default Producto;