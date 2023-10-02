import { ReactElement } from "react";
import Nav from "./Nav";
import useCart from "../hooks/useCart";

export type PropsType = {
  viewCart: boolean;
  updateViewCart: (toogle: boolean) => void;
};

const Header = ({ viewCart, updateViewCart }: PropsType): ReactElement => {
    const { totalItems, totalPrice } = useCart();
    const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Acme Co.</h1>
        <div className="header__price-box">
          <p>Total items: {totalItems}</p>
          <p>Total price: {totalPrice}</p>
        </div>
        <Nav viewCart={viewCart} updateViewCart={updateViewCart} />
      </div>
    </header>
  );
  return <>{content}</>;
};

export default Header;
