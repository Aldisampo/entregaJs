import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";

export default function App() {


  return (
    <>
     <Navbar />
     <ItemDetailContainer/>
     <ItemListContainer message ={'Nuestra Tienda'}/>
     <Footer />
    </>
  );
}
