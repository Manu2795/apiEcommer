import { Router } from 'express';
import { crearUsiarios, getUsers } from '../controllers/user.controller';
import { actualizarDatos } from '../controllers/user.controller';


const router = Router();

router.get('/users', getUsers);
router.post('/users', crearUsiarios);
router.put('/users/:id', actualizarDatos);

export default router;