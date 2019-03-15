const { Router } = require('express');
const { getProducts, getProduct } = require('./product.controller');

const router = Router();

router.get('/', getProducts);
router.route('/:id').get(getProduct);

module.exports = router;
