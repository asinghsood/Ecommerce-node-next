import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoute from './routes/products';
import cartRoute from './routes/cart';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);


app.listen(port, () => {
  console.log(`Server is running at - https://localhost:${port}`);
});
