import { useState } from "react";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/pageFooter";
import Guitar from "./components/Guitar";


import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PageHeader />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          <Guitar />
        </div>
      </main>

      <PageFooter />
    </>
  );
}

export default App;
