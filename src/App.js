import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

export default function App() {


  return (
    <>
     <Navbar />
     <ItemListContainer />
     <Footer />
    </>
  );
}
