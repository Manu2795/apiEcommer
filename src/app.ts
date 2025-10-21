import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';

dotenv.config();

const app = express();

//Middlewares
app.use(express.json());//Para parsear el body de las peticiones como JSON

//Rutas
app.use('/api', userRoutes);

export default app;