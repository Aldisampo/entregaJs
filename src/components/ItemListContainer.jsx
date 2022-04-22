import React, {useEffect, useState } from 'react';
import { promesas } from '../utils/productos';
import { useParams } from 'react-router-dom';
import ItemList from './items/ItemList';


const ItemListContainer = ({message}) => {
  
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { categoryId } = useParams();

  console.log('1',categoryId);

  useEffect(() => {
    setLoading(true);
    promesas(categoryId)
      .then((res) => setItems(res))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
    }, [categoryId]);

  return (
    <>
    {loading ? (
      <h1>Cargando productos, espera por favor :)</h1>
    ) : (
        <ItemList productos={item}/>
    )};
    </>
    );
  };

export default ItemListContainer