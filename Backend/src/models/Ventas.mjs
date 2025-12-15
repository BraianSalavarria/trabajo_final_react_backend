import mongoose, { Types } from "mongoose";

const ventaSchema = new mongoose.Schema(
    {
        cliente: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cliente',
            required: true
        },
        fecha:{
            type: Date,
            default: Date.now
        },
        items:[
            {
                producto:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'producto',
                    required: true
                },
                cantidad:{ 
                    type: Number,
                    required: true
                },
                precioUnitario:{
                    type: Number,
                    required: true
                },
                subTotal:{
                    type: Number,
                    required: true
                }
            }
        ],
        total:{
            type: Number,
            required: true
        }
    }
);

 const Venta = mongoose.model('venta',ventaSchema,'ventas');
export default Venta;