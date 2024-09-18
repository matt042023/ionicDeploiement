const router = require('express').Router();
const { getAllProduct, createProduct, getProductById, deleteProductById, updateProductById } = require('../controller/ProductController');

router.get('/', getAllProduct);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.delete('/:id', deleteProductById);
router.put('/:id', updateProductById);

module.exports = router;