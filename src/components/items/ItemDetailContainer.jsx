import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import  promesas from '../../utils/promesas';



const ItemDetailContainer = () =>{
    const [items, setItems] = useState({})

    useEffect(()=>{ //va adentro porque controla l que queremos renderizar (se rend. cuando cambia props o estado) y en que momento 
        promesas()
            .then((res)=>{
               setItems(res); // console.log(res)
            })
    }, [])

    return (
        <>
            <ItemDetail productos={items}/>
        </>
    )
};

export default ItemDetailContainer