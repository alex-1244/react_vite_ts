import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products.tsx";
import Product from "./pages/products/Product.tsx";
import NewProduct from "./pages/products/NewProduct.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 className="text-3xl font-bold underline text-center">
          Hello world!
        </h1>
      </div>
      <div>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/product/new" element={<NewProduct />} />
        </Routes>
      </div>
      <div>
        <div className="m-2">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div className="">
          <Link
            to="/products"
            className="bg-sky-500 rounded px-2 py-1 inline-block"
          >
            Products
          </Link>
        </div>
        <div className="m-2">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
