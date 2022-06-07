import express, { Request, Response } from 'express';
import {productData} from '../../data/product';

const router = express.Router();


router.get('/all', (_, res: Response) => {
  res.status(200).json(productData);
});

router.get('/:id', (req: Request, res: Response) => {
  try {
    const page_no: number = Number(req.params.id);
    const page_max: number = 100;
    const start = (page_no - 1) * page_max + 1 - 1;
    const end = page_no * page_max;
    const product = productData.slice(start, end);
    const productJson = {
      products: product,
      totalProductSize: productData.length,
      pageSize: page_max
    }
    res.status(200).json(productJson);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
