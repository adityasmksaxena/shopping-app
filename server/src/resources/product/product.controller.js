const Product = require('./product.model');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(400).end();
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(400).end();
  }
};

module.exports = { getProducts, getProduct };
