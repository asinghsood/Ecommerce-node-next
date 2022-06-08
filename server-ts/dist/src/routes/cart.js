"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartItem = void 0;
const express_1 = __importDefault(require("express"));
const product_1 = require("../../data/product");
const router = express_1.default.Router();
exports.cartItem = [];
router.post("/add", (req, res) => {
    try {
        const { productId } = req.body;
        const product = Number(productId);
        const productIndex = product_1.productData.findIndex((productItem) => productItem.id === product);
        if (product_1.productData[productIndex]) {
            exports.cartItem.push(product_1.productData[productIndex]);
            const finalData = {
                totalCartItem: exports.cartItem.length,
                item: product_1.productData[productIndex],
            };
            res.status(200).json(finalData);
        }
        else {
            res.status(404).json("Product not found");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});
router.get("/", (_, res) => {
    try {
        res.status(200).json(exports.cartItem);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.default = router;
