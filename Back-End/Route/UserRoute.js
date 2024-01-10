// RoleRoute.js
import {
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
    login
} from '../Controller/UserController.js';
import { Router } from 'express';
// import {verifyadmin, verifyToken} from '../middelware/auth.js'

const router = Router();

router.post('/', addUser);
router.get('/',getAllUser);
router.get('/:id', getOneUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', login);



export default router;
