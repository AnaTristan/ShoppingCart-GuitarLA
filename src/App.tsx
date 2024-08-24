import { useReducer } from "react";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/pageFooter";
import Guitar from "./components/Guitar";
import { useCart } from "./hooks/useCart";

import "./index.css";
import { cartReducer, initialState } from "./reducers/cartReducer";

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCart();

  // le pasamos la funcion de cart reducer e initial state.
  // [state] =  va a ser nustro estado
  // [dispatch] =  va a ser
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <PageHeader
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <PageFooter />
    </>
  );
}

export default App;
