import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
// task :
// zrob Carda ktory obejmuje mealsList (border-radius, bgc,)
// i dodaj wiecej danych do MealsElementow(cena itp)
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
