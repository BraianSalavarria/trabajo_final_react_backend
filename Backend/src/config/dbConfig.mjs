import mongoose from "mongoose";
const url_bd = process.env.url_bd;
export async function connectDB() {
    try{
        await mongoose.connect(url_bd);
        console.log('coneccion a la base de datos exitosa');
    }catch (error){
        console.error("error al conectar mongo db", error);
        process.exit(1);
    }
}
