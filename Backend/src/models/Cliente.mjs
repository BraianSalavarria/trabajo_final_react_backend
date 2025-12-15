import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
    {
        nombre: {type:String, required: true}
    });

    const Cliente = mongoose.model('cliente', clienteSchema,'clientes');
    export default Cliente;