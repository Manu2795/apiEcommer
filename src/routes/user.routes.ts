import { Router } from 'express';
import { crearUsiarios, getUsers, actualizarDatos, eliminarUsuario } from '../controllers/user.controller';

const router = Router();

router.get('/users', getUsers);
router.post('/users', crearUsiarios);
router.put('/users/:id', actualizarDatos);
router.delete('/users/:id', eliminarUsuario);

export default router;