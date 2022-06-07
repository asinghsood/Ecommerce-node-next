"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../../data/product");
const router = express_1.default.Router();
const cartItem = [];
router.post('/add', (req, res) => {
    try {
        const { productId } = req.body;
        const product = Number(productId);
        const productIndex = product_1.productData.findIndex((productItem) => productItem.id === product);
        if (product_1.productData[productIndex]) {
            cartItem.push(product_1.productData[productIndex]);
            res.status(200).json(product_1.productData[productIndex]);
        }
        else {
            res.status(404).json('Product not found');
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});
router.get('/', (_, res) => {
    try {
        res.status(200).json(cartItem);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.default = router;
