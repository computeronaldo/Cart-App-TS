import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"

import { useState } from "react"

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const updateViewCart = (toogle: boolean) => {
    setViewCart(toogle);
  };

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <Header viewCart={viewCart} updateViewCart={updateViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )
  return content;
}

export default App
