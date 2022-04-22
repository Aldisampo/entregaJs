import React, {useEffect, useState } from 'react';
import promesas from '../utils/promesas';
import { useParams } from 'react-router-dom';
import ItemList from './items/ItemList';

function ItemListContainer({message}) {
  
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { categoryId } = useParams();

  console.log('1',categoryId);

  useEffect(() => {
    promesas(categoryId)
      .then((res) => setItems(res))
      .catch((error) => console.log(error))
      .finally(() =>{
        setLoading(false);
      });
    }, [categoryId]);

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