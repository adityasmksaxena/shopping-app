const productRouter = require('../resources/product/product.route');

const setupRoutes = app => {
  app.use('/api/products', productRouter);
};

module.exports = setupRoutes;
