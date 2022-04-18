import React, {useEffect, useState } from 'react';
import promesas from '../utils/promesas';
import productos from '../utils/productos';
import ItemList from './items/ItemList';

function ItemListContainer({message}) {
  
  const [item, setItems] = useState([]);
  
  useEffect(() => {
    promesas(3000, productos)
    .then(resultado => setItems(resultado))
    .catch(error => console.log(error));
  }, [item])

  return (
    <>
    <h1>{message}</h1>
      <div>
        <ItemList productos={item}/>
      </div>
    </>
    )
  } 

export default ItemListContainer