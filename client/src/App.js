import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import data from "./data.json";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

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
      if (order === "lowest") {
        return a.price - b.price;
      } else if (order === "highest") {
        return b.price - a.price;
      } else if (order === "latest") {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  }

  function addToCart(product) {
    const cartItemsClone = [...cartItems];
    let isProductExist = false;

    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
    });

    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsClone);
  }

  function removeFromCart(product) {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter((p) => p.id !== product.id));
  }

  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} addToCart={addToCart} />
            <Filter
              productsNum={products.length}
              size={size}
              sort={sort}
              handleFilterBySize={handleFilterBySize}
              handleFilterByOrder={handleFilterByOrder}
            />
          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </main>

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
