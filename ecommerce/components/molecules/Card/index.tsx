import { CardCotainer, CardContent, StyledFooter } from "./Card.style";
import Typography from "../../atoms/Typography";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
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

type Props = {
  addCartButton: (id: number) => void;
  item: ProductItem
};

const Card = (props: Props) => {
  const { addCartButton, item } = props;
console.log({item})
  return (
    <>
      <div className="card-image">
        <Image src={item.thumbnail} alt="logo" width="300px" height="300px" />
      </div>
      <CardCotainer>
        <CardContent>
          <Typography htmlTag="p" cssStyle="PARA_BOLD" >
            {item.title}
          </Typography>
          <Typography htmlTag="p" cssStyle="PARA">
           {item.category} - {item.brand}
          </Typography>
          <Typography htmlTag="p" cssStyle="PARA" margin="8px 0">
            $ {item.price}
          </Typography>
        </CardContent>
      </CardCotainer>
      <StyledFooter>
        <Button onClick={() => addCartButton(item.id)}>Add to cart</Button>
      </StyledFooter>
    </>
  );
};

export default Card;
