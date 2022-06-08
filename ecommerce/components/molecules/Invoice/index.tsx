import { TotalAmountContainer, TotalAmount } from "./invoice.style";
import Typography from "../../atoms/Typography";
interface ProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductList {
  cartData: Array<ProductItem>;
}

const Invoice = ({ cartData }: ProductList) => {
  return (
    <TotalAmountContainer>
      <Typography htmlTag="p" cssStyle="PARA" margin="8px 0">
        PRICE DETAILS ({cartData?.length || 0} items)
      </Typography>
      <table>
        <tbody>
          <tr>
            <th scope="row">Total MRP:</th>
            <td>300</td>
          </tr>
          <tr>
            <th scope="row">Discount on MRP:</th>
            <td>-2000</td>
          </tr>
          <tr>
            <th scope="row">Coupon:</th>
            <td>ABCDEFG</td>
          </tr>
          <TotalAmount>
            <th scope="row">Total Amount:</th>
            <td>$ 200000</td>
          </TotalAmount>
        </tbody>
      </table>
    </TotalAmountContainer>
  );
};

export default Invoice;
