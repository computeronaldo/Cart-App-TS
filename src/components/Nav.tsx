import { ReactElement } from "react";
import { PropsType } from "./Header";

const Nav = ({ viewCart, updateViewCart }: PropsType): ReactElement => {
  const button = viewCart ? (
    <button onClick={() => updateViewCart(false)}>View Porducts</button>
  ) : (
    <button onClick={() => updateViewCart(true)}>View Cart</button>
  );
  const content = <nav className="nav">{button}</nav>;
  return (
    <>
        {content}
    </>
  );
};

export default Nav;
