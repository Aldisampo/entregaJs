import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {


  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
              <Route path="/" element={<ItemListContainer message ={'Nuestra Tienda'}/>} />
              <Route 
                  path="/category/:categoryId"
                  element={<ItemListContainer />} 
                />
              <Route path="/item/:id" element={<ItemDetailContainer />} />

        </Routes>
     <Footer />
     </BrowserRouter>
    </>
  );
}
