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
  const getTotalMRP = () => {
    let total;
    total = cartData.reduce(
      (sum, { price }: { price: number }) => sum + price,
      0
    );
    return total.toFixed(2) || 0;
  };
  const getDiscountOnMRP = () => {
    let totalDiscount;
    totalDiscount = cartData.reduce(
      (
        sum,
        {
          price,
          discountPercentage,
        }: { price: number; discountPercentage: number }
      ) => {
        let discountPerc = discountPercentage;
        let discount = price - (price * ((100 - discountPerc) / 100));
        return sum + discount;
      },
      0
    );
    return totalDiscount.toFixed(2) || 0;
  };
  const getTotalAmount = () => {
    const totalMRP = getTotalMRP() as number;
    const totalDiscount = getDiscountOnMRP() as number;
    const totalAmount = (totalMRP - totalDiscount) +10
    return totalAmount.toFixed(2) || 0; 
  }
  return (
    <TotalAmountContainer>
      <Typography htmlTag="p" cssStyle="PARA" margin="8px 0">
        PRICE DETAILS ({cartData?.length || 0} items)
      </Typography>
      <table>
        <tbody>
          <tr>
            <th scope="row">Total MRP:</th>
            <td>{getTotalMRP()}</td>
          </tr>
          <tr>
            <th scope="row">Discount on MRP:</th>
            <td>{getDiscountOnMRP()}</td>
          </tr>
          <tr>
            <th scope="row">Coupon:</th>
            <td>SPRING_SALE</td>
          </tr>
          <tr>
            <th scope="row">Conevenience Fee</th>
            <td>$10</td>
          </tr>
          <TotalAmount>
            <th scope="row">Total Amount:</th>
            <td>${getTotalAmount()}</td>
          </TotalAmount>
        </tbody>
      </table>
    </TotalAmountContainer>
  );
};

export default Invoice;
