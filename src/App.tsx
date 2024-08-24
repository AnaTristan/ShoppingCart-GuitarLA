import { useReducer } from "react";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/pageFooter";
import Guitar from "./components/Guitar";
import { useCart } from "./hooks/useCart";

import "./index.css";
import { cartReducer, initialState } from "./reducers/cartReducer";

function App() {
  const { removeFromCart, decreaseQuantity, increaseQuantity, clearCart } =
    useCart();

  // le pasamos la funcion de cart reducer e initial state.
  // [state] =  va a ser nustro estado
  // [dispatch] =  va a ser
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <PageHeader
        cart={state.cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        dispatch={dispatch}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {state.data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} dispatch={dispatch} />
          ))}
        </div>
      </main>

      <PageFooter />
    </>
  );
}

export default App;
