const Product = require("../models/product.model");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error })
    }
};
const getProduct_id = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getProduct_by_name = async (req,res) => {
    try {
        const {name} = req.params;
        const products = await Product.findOne({ name });
        if (!products) {
            res.status(404).json({ "message": "Product not found" });
        }
        const productsUpdate = await Product.findById(id);
        res.status(200).json(productsUpdate);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const update_products = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const edit_products = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndUpdate(id, req.body);

        if (!products) {
            res.status(404).json({ "message": "Product not found" });
        }
        const productsUpdate = await Product.findById(id);
        res.status(200).json(productsUpdate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const del_products = async (req, res) => {
    try {
        const { id } = req.params;
        const productUpdate = await Product.findByIdAndDelete(id);
        if (!productUpdate) {
            res.status(404).json({ "message": 'Product not found' });
        }
        res.status(200).json(productUpdate);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getProducts,
    getProduct_id,
    getProduct_by_name,
    update_products,
    edit_products,
    del_products

}