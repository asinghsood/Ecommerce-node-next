import { useEffect, useState, useContext } from "react";
import Image from "../../atoms/Image";
import { Wrapper } from "./CardConatiner.style";
import Typography from "../../atoms/Typography";
import {
  Container,
  UlList,
  LICard,
  CardCotainer,
  CardContent,
} from "../../molecules/Card/Card.style";
import AppContext from "../../../AppContext";
import Invoice from "../../molecules/Invoice";

const image = "https://picsum.photos/200/300";

interface ProductItemType {
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

const CartConatiner = () => {
  const value = useContext(AppContext);
  const { setCount } = value;
  const [cartData, setCartData] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const loaderId = document.querySelector<HTMLElement>("#loader");
    const cartPage = document.querySelector<HTMLElement>("#cartContainer");
    if (loaderId && cartPage) {
      if (!spinner) {
        loaderId.style.display = "none";
        cartPage.style.opacity = "";
      } else {
        loaderId.style.display = "block";
        cartPage.style.opacity = "0.3";
      }
    }
  }, [spinner]);

  const fetchCartData = async () => {
    setSpinner(true);
    const url = `http://localhost:3003/api/cart/`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCartData(data);
      setSpinner(false);
      setCount(data.length);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);
  const getDiscountedPrice = (item: ProductItemType) => {
    const { price, discountPercentage } = item;
    let discountedPrice = price * ((100 - discountPercentage) / 100);
    return discountedPrice?.toFixed() || 0;
  };
  return (
    <div>
      <Typography htmlTag="h1" cssStyle="H1_REG" margin="20px 0">
        Items in Cart
      </Typography>
      <Wrapper>
        <Container isCartPage>
          <UlList isLiScrollable>
            {cartData.length ? (
              cartData.map((item: ProductItemType) => (
                <LICard key={item.id} liWidth="100%" isCartPage>
                  <div>
                    <Image
                      src={item.thumbnail}
                      alt="logo"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <CardCotainer isCartPage>
                    <CardContent>
                      <Typography
                        htmlTag="p"
                        cssStyle="PARA_BOLD"
                        margin="8px 0"
                      >
                        {item.title}
                      </Typography>
                      <Typography htmlTag="p" cssStyle="PARA">
                        Sold by: {item.brand}
                      </Typography>
                      <Typography htmlTag="p" cssStyle="PARA">
                        {item.category}
                      </Typography>
                      <Typography
                        htmlTag="p"
                        cssStyle="PARA_STRIKE"
                        margin="8px 0 0 0"
                      >
                        ${item.price}
                       
                      </Typography>
                      <Typography
                        htmlTag="p"
                        cssStyle="PARA_BOLD"
                      >
                         ${(getDiscountedPrice(item))}{' '}
                        <span>{item.discountPercentage.toFixed()}% OFF</span>
                      </Typography>
                    </CardContent>
                  </CardCotainer>
                </LICard>
              ))
            ) : (
              <Typography htmlTag="h3" cssStyle="H3_REG" margin="20px 0">
                No Items added to Cart
              </Typography>
            )}
          </UlList>
        </Container>
        {cartData?.length ? <Invoice cartData={cartData} /> : <></>}
      </Wrapper>
    </div>
  );
};

export default CartConatiner;
