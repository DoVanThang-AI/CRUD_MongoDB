const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const { getProducts, getProduct_id,update_products, edit_products,del_products} = require("../controllers/product.controller.js");

router.get('/', getProducts);

router.get("/:id", getProduct_id);
router.post("/", update_products);
router.put("/:id", edit_products);
router.delete("/:id", del_products);

module.exports = router;