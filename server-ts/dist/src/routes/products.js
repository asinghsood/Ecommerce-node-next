"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../../data/product");
const cart_1 = require("./cart");
const router = express_1.default.Router();
router.get('/all', (_, res) => {
    res.status(200).json(product_1.productData);
});
router.get('/:id', (req, res) => {
    try {
        const page_no = Number(req.params.id);
        const page_max = 100;
        const start = (page_no - 1) * page_max + 1 - 1;
        const end = page_no * page_max;
        const product = product_1.productData.slice(start, end);
        const productJson = {
            products: product,
            totalProductSize: product_1.productData.length,
            pageSize: page_max,
            totalCartItem: cart_1.cartItem.length
        };
        res.status(200).json(productJson);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.default = router;
