import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
// TASKS :
/* 
1. Add Order Form (checkout)
2. Submitting orders to data base (firebase) (czy mozna zamowic w ogole
  .. takie ilosci jedzenia)
3. Fetching meals from data baase 



*/

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (props) => {
    setCartIsShown(true);
  };
  const hideCartHandler = (props) => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
