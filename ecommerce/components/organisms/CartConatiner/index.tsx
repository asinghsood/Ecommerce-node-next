import { useEffect, useState } from "react";
import Image from "../../atoms/Image";
import { Wrapper, TotalAmountContainer, TotalAmount } from "./CardConatiner.style";
import Typography from "../../atoms/Typography";
import {
  Container,
  UlList,
  LICard,
  CardCotainer,
  CardContent,
} from "../../molecules/Card/Card.style";

const image = "https://picsum.photos/200/300";

const CartConatiner = () => {
  const [cartData, setCartData] = useState([]);

  const fetchCartData = async () => {
    const url = `http://localhost:3003/api/cart/`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setCartData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <div>
      <Typography htmlTag="h1" cssStyle="H1_REG" margin="20px 0">
        Items in Cart
      </Typography>
      <Wrapper>
        <Container isCartPage>
          <UlList isLiScrollable>
            {cartData.map((item) => (
              <LICard key={item.id} liWidth="100%" isCartPage>
                <div className="card-image">
                  <Image src={image} alt="logo" width="100px" height="100px" />
                </div>
                <CardCotainer isCartPage>
                  <CardContent>
                    <Typography htmlTag="p" cssStyle="PARA" margin="8px 0">
                      Here's some content
                    </Typography>
                    <Typography htmlTag="p" cssStyle="PARA">
                      RS.200
                    </Typography>
                  </CardContent>
                </CardCotainer>
              </LICard>
            ))}
          </UlList>
        </Container>
        <TotalAmountContainer>
          <Typography htmlTag="p" cssStyle="PARA" margin="8px 0">
            PRICE DETAILS ({cartData.length || 0} items)
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
                <td>&#8377; 200000</td>
              </TotalAmount>
            </tbody>
          </table>
        </TotalAmountContainer>
      </Wrapper>
    </div>
  );
};

export default CartConatiner;
