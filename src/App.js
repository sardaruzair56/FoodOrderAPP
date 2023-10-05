import { useState } from "react";
import Header from "./Component/Layout/header";
import Meals from "./Component/Meal/Meals";
import Cart from './Component/Cart/Cart';
import cartProvider from "./store/cartContextProvider";

function App() {

  const [shownCart, setShownCart]=useState(false);

  const showCartHandler=()=>{
    setShownCart(true);
  }

  const hideCartHandler=()=>{
    setShownCart(false);
  }
  return (
    <cartProvider>
      {shownCart && <Cart onClose={hideCartHandler}/>}
      <Header onShownCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </cartProvider>
  );
}

export default App;
