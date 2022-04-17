import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import ItemDetail from "./components/items/ItemDetail";

export default function App() {


  return (
    <>
     <Navbar />
     <ItemDetail/>
     <ItemListContainer message ={'Nuestra Tienda'}/>
     <ItemDetailContainer/>
     <Footer />
    </>
  );
}
