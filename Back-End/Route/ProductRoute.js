// RoleRoute.js
import {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
} from '../Controller/ProductController.js';
import { Router } from 'express';
import { verifyToken ,verifyadmin } from '../config/auth.js';

const router = Router();

router.post('/',verifyadmin, addProduct);
router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.patch('/:id', updateProduct);
router.delete('/:id',verifyadmin, deleteProduct);

export default router;
