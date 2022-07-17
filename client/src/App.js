import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data.json";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { NavLink, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <main>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/orders" element={<Orders />} exact />
            </Routes>
          </main>

          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
