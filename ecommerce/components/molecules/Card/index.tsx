import { CardCotainer, CardContent, StyledFooter } from "./Card.style";
import Typography from "../../atoms/Typography";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";

type Props = {
  image?: string;
  addCartButton: (id: number) => void;
  id: number;
};

const Card = (props: Props) => {
  const { image, addCartButton, id } = props;

  return (
    <>
      <div className="card-image">
        <Image src={image} alt="logo" width="300px" height="300px" />
      </div>
      <CardCotainer>
        <CardContent>
          <Typography htmlTag="p" cssStyle="PARA" margin="8px 0">
            Here's some content {id}
          </Typography>
          <Typography htmlTag="p" cssStyle="PARA">
            RS.200
          </Typography>
        </CardContent>
      </CardCotainer>
      <StyledFooter>
        {/* <Link>Add to cart</Link> */}
        <Button onClick={() => addCartButton(id)}>Add to cart</Button>
      </StyledFooter>
    </>
  );
};

export default Card;
