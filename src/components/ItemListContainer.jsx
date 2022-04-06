import React from "react";
import ItemCount from "./ItemCount";

function ItemListContainer() {
    return (
      <>
      <div>
        <ItemCount stock={5} initial={1}/>
      </div>
      </>
    )
  }

  export default ItemListContainer