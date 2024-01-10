// RoleRoute.js
import {
    addCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    deleteCateogry
} from '../Controller/CategoryController.js';
import { verifyToken ,verifyadmin } from '../config/auth.js';

import { Router } from 'express';

const router = Router();

router.post('/',verifyadmin, addCategory);
router.get('/', getAllCategories);
router.get('/:id', getOneCategory);
router.patch('/:id',verifyadmin, updateCategory);
router.delete('/:id',verifyadmin, deleteCateogry);

export default router;
