import 'dotenv/config';
import express from 'express'
import { connectDB } from './config/dbConfig.mjs';
import productoRouter from './routes/productoRouter.mjs'
import clienteRouter from './routes/clienteRouter.mjs'
import ventaRouter from './routes/ventaRouter.mjs'
import userRouter from './routes/userRouter.mjs'
import  authRouter  from './routes/authRouter.mjs';
import morgan from 'morgan';
import cors from 'cors'


const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
connectDB();

app.use('/api',productoRouter);
app.use('/api',clienteRouter);
app.use('/api',ventaRouter);
app.use('/api/auth', authRouter);
app.use('/api', userRouter);


app.listen(PORT, ()=>{
    console.log(`✅Servidor iniciado en: 🌎 http://localhost:${PORT}`);
})