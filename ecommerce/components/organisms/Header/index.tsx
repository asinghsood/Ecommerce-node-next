import { useContext } from "react";
import {
  StyledHeader,
  RightComponent,
  LogoLink,
  IconText,
  CartTotalCount,
  CartTextStyle,
} from "./Header.style";
import Image from "../../atoms/Image";
import Link from "next/link";
import { CartIcon, CheckoutIcon } from "../../atoms/Icons";
import ThemeToggle from "../../molecules/ThemeToggle";
import AppContext from "../../../AppContext";

type HeaderProps = {
  toggleTheme?: () => void;
};

const Header = (props: HeaderProps) => {
  const { toggleTheme } = props;
  const value = useContext(AppContext);
  const { cartItemCount } = value.state;

  return (
    <StyledHeader>
      <Link href="/">
        <LogoLink>
          <Image
            src="/android-chrome-192x192.png"
            alt="logo"
            width="40px"
            height="40px"
          />
          <IconText fontSize={"28px"} marginLeft={"30px"}>
            Jabong
          </IconText>
        </LogoLink>
      </Link>
      <RightComponent>
        <Link href="/cart">
          <CartTextStyle>
            <CartIcon />
            <IconText>
              Cart
              <CartTotalCount>{cartItemCount}</CartTotalCount>
            </IconText>
          </CartTextStyle>
        </Link>
        <Link href="/">
          <a>
            <CheckoutIcon />
            <IconText>Checkout</IconText>
          </a>
        </Link>
        <ThemeToggle toggleTheme={toggleTheme} />
      </RightComponent>
    </StyledHeader>
  );
};
export default Header;
