import React, {useEffect, useState } from 'react';
import promesas from '../utils/promesas';
import productos from '../utils/productos';
import ItemList from './items/ItemList';

function ItemListContainer({message}) {
  
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    promesas(3000, productos)
    .then(resultado => setItems(resultado))
    .catch(error => console.log(error));
  }, [items])

  return (
    <>
    <h1>{message}</h1>
      <div>
        <ItemList productos={items}/>
      </div>
    </>
    )
  } 

export default ItemListContainer