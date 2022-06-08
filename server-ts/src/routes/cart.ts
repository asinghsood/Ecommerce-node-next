import express, { Request, Response } from "express";
import { productData } from "../../data/product";
import { ProductList } from "../types/product.type";

const router = express.Router();
export const cartItem: ProductList = [];

router.post("/add", (req: Request, res: Response) => {
  try {
    const { productId } = req.body;
    const product: number = Number(productId);
    const productIndex: number = productData.findIndex(
      (productItem) => productItem.id === product
    );
    if (productData[productIndex]) {
      cartItem.push(productData[productIndex]);
      const finalData = {
        totalCartItem: cartItem.length,
        item: productData[productIndex],
      };
      res.status(200).json(finalData);
    } else {
      res.status(404).json("Product not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", (_, res: Response) => {
  try {
    res.status(200).json(cartItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
