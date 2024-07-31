import { useState } from "react";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/pageFooter";
import Guitar from "./components/Guitar";
import { db } from "./data/db";

import "./index.css";

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExists < 0) {
      item.quantity = 1;
      setCart([...cart, item]);
    } else {
      const updateCart = [...cart];
      updateCart[itemExists].quantity++;
      setCart(updateCart);
    }
  }

  return (
    <>
      <PageHeader cart={cart} />

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
