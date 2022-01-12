import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import data from "./data.json";
import "./index.css";

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  function handleFilterBySize(e) {
    setSize(e.target.value);

    if (e.target.value === "all") {
      setProducts(data);
    } else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(e.target.value) !== -1
      );
      setProducts(newProducts);
    }
  }

  function handleFilterByOrder(e) {
    let order = e.target.value;
    setSort(e.target.value);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a, b) {
      if (order == "lowest") {
        return a.price - b.price;
      } else if (order == "highest") {
        return b.price - a.price;
      } else if (order == "latest") {
        // console.log(a.id < b.id ? 1 : -1);
        console.log(a.id);
        console.log(b.id);
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter
            size={size}
            sort={sort}
            handleFilterBySize={handleFilterBySize}
            handleFilterByOrder={handleFilterByOrder}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
