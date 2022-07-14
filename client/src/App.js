import React from "react";
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
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main>
          <div className="wrapper">
            <Products />
            <Filter />
          </div>
          <Cart />
        </main>

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
